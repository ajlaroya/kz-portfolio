"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function DraggableText({
  text = "portfolio2026",
  constraintRef,
}: {
  text?: string;
  constraintRef?: React.RefObject<HTMLElement>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const letterRefs = useRef<Array<HTMLDivElement | null>>([]);
  const letters = text.split("");

  // store physics state in refs so updates don't force many re-renders
  const positionsRef = useRef(
    letters.map(() => ({
      x: 0,
      y: -Math.random() * 200,
      vx: 0,
      vy: 0,
      isDragging: false,
    }))
  );

  // small state to trigger re-render when needed
  const [, setTick] = useState(0);

  // keep positions in sync if text changes length
  useEffect(() => {
    if (positionsRef.current.length !== letters.length) {
      positionsRef.current = letters.map((_, i) => {
        const existing = positionsRef.current[i];
        return (
          existing ?? {
            x: 20 + i * 40,
            y: -Math.random() * 200,
            vx: 0,
            vy: 0,
            isDragging: false,
          }
        );
      });
      setTick((t) => t + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letters.length]);

  // use the externally-provided constraintRef if present, else the component's container
  const boundRef =
    (constraintRef as React.RefObject<HTMLElement>) ?? containerRef;

  // initialize starting horizontal positions once container is measured
  useEffect(() => {
    const crect = boundRef.current?.getBoundingClientRect();
    const width = crect?.width ?? 800;
    const spacing = Math.min(96, (width - 40) / Math.max(1, letters.length));
    letters.forEach((_, i) => {
      positionsRef.current[i].x = 20 + i * spacing;
      positionsRef.current[i].y = -Math.random() * 200;
      positionsRef.current[i].vx = 0;
      positionsRef.current[i].vy = 0;
    });
    // force a render so initial positions are visible
    setTick((t) => t + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // physics loop (use boundRef instead of containerRef)
  useEffect(() => {
    let last = performance.now();
    let raf = 0;
    function step(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000); // cap dt for stability
      last = now;

      const crect = boundRef.current?.getBoundingClientRect();
      if (crect) {
        const width = crect.width;
        const height = crect.height;

        // measure a letter for collision box (fallback to 80)
        const sampleRect = letterRefs.current[0]?.getBoundingClientRect();
        const lw = sampleRect?.width ?? 80;
        const lh = sampleRect?.height ?? 80;

        const gravity = 1200; // px / s^2
        const bounce = 0.6;
        const air = 0.995;

        let changed = false;
        const ps = positionsRef.current;
        for (let i = 0; i < ps.length; i++) {
          const p = ps[i];
          if (p.isDragging) continue; // skip while user drags

          p.vy += gravity * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;

          // floor collision
          if (p.y + lh > height) {
            p.y = height - lh;
            p.vy = -p.vy * bounce;
            p.vx *= 0.98;
          }

          // left/right walls
          if (p.x < 0) {
            p.x = 0;
            p.vx = -p.vx * bounce;
          }
          if (p.x + lw > width) {
            p.x = width - lw;
            p.vx = -p.vx * bounce;
          }

          // air resistance
          p.vx *= air;

          if (Math.abs(p.vx) + Math.abs(p.vy) > 0.001) changed = true;
        }
        if (changed) setTick((t) => t + 1);
      }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [letters.length, boundRef]);

  // drag handlers: use boundRef for measurements and for velocities
  const handleDragStart = (i: number) => {
    positionsRef.current[i].isDragging = true;
  };

  const handleDragEnd = (
    i: number,
    _event: PointerEvent | MouseEvent,
    info: any
  ) => {
    const el = letterRefs.current[i];
    const crect = boundRef.current?.getBoundingClientRect();
    if (!el || !crect) {
      positionsRef.current[i].isDragging = false;
      return;
    }
    const rect = el.getBoundingClientRect();
    positionsRef.current[i].x = rect.left - crect.left;
    positionsRef.current[i].y = rect.top - crect.top;

    // info.velocity is px/s from motion's drag
    positionsRef.current[i].vx = info?.velocity?.x ?? 0;
    positionsRef.current[i].vy = info?.velocity?.y ?? 0;
    positionsRef.current[i].isDragging = false;

    setTick((t) => t + 1);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {letters.map((ch, i) => {
        const p = positionsRef.current[i] || { x: 0, y: 0 };
        return (
          <motion.div
            key={`${ch}-${i}`}
            ref={(el) => {
              letterRefs.current[i] = el;
            }}
            drag
            dragMomentum={false} // we feed momentum into our physics
            dragConstraints={boundRef}
            dragElastic={0.18}
            onDragStart={() => handleDragStart(i)}
            onDragEnd={(e, info) => handleDragEnd(i, e as any, info)}
            whileTap={{ scale: 0.98 }}
            className="absolute cursor-grab select-none w-28 h-28 flex items-center justify-center text-3xl md:text-4xl font-extrabold uppercase tracking-wider"
            style={{
              transform: `translate3d(${Math.round(p.x)}px, ${Math.round(
                p.y
              )}px, 0)`,
              touchAction: "none",
              userSelect: "none",
            }}
          >
            {ch}
          </motion.div>
        );
      })}
    </div>
  );
}
