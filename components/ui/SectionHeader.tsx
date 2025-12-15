import React from "react";

type Props = {
  title: string;
  right?: React.ReactNode;
};

export default function SectionHeader({ title, right }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h2
        className="text-3xl font-semibold"
        style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {right ?? (
        <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M6 9l6 6 6-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
