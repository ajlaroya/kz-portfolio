import React from "react";

type Variant = "dark" | "blue" | "light";

type Props = {
  variant?: Variant;
  icon?: React.ReactNode;
  text: string;
};

const variantClasses: Record<Variant, string> = {
  dark: "rounded-xl border-2 bg-black text-white p-6 flex flex-col justify-between shadow-md",
  blue: "rounded-xl bg-[#3752FF] p-6 flex flex-col justify-between shadow-md",
  light:
    "rounded-xl border-2 bg-white p-6 flex flex-col justify-between shadow-md",
};

export default function ContactCard({ variant = "light", icon, text }: Props) {
  return (
    <div className={variantClasses[variant]}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-white font-bold">
          {icon}
        </div>
        <div className="flex-1">
          <div className="h-0.5 bg-white/30 w-full mb-3" />
          <p
            className={
              variant === "light"
                ? "text-sm text-gray-700"
                : "text-sm text-white/90"
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
