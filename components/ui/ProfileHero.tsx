import React from "react";

type Props = {
  alt?: string;
  nameLines?: string[];
  caption?: string;
};

export default function ProfileHero({
  alt = "Portrait",
  nameLines = [],
  caption,
}: Props) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-black h-[620px] col-span-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/kizzy.webp"
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-95"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute left-6 top-8 text-white">
        <p className="opacity-100">Hello,</p>
        <h1 className="mt-2 font-bold text-6xl tracking-tight">
          {nameLines.map((l, i) => (
            <React.Fragment key={i}>
              {l}
              <br />
            </React.Fragment>
          ))}
        </h1>
      </div>

      {caption ? (
        <div className="absolute left-6 right-6 bottom-6 text-right">
          <p className=" text-gray-200/90 px-2">{caption}</p>
        </div>
      ) : null}
    </div>
  );
}
