import React from "react";

type Variant = "dark" | "blue" | "light";

type Props = {
  variant?: Variant;
  icon?: React.ReactNode;
  text: string;
};

const variantClasses: Record<Variant, string> = {
  dark: "rounded-3xl bg-black text-white p-2 flex flex-col justify-between cursor-pointer",
  blue: "rounded-3xl bg-[#3752FF] p-2 flex flex-col justify-between cursor-pointer",
  light:
    "rounded-3xl border-2 bg-white p-2 flex flex-col justify-between border-black cursor-pointer",
};

export default function ContactCard({ variant = "light", icon, text }: Props) {
  return (
    <div className={variantClasses[variant]}>
      <div className="flex flex-col gap-3">
        <div className="w-10 h-10 m-1 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="flex-1 pt-10">
          <div
            className={
              variant === "light"
                ? "h-0.5 bg-black w-full mb-3"
                : "h-0.5 bg-white w-full mb-3"
            }
          />
          <p
            className={
              variant === "light"
                ? "text-sm text-gray-700 text-right"
                : "text-sm text-white/90 text-right"
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
