import React from "react";

type ResumeCardProps = {
  date: string;
  logo?: string;
  company: string;
  position: string;
  accentColor?: string;
  variant?: "education";
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  date,
  logo = "/kicre8z.png",
  company,
  position,
  accentColor = "#F58D8C",
  variant,
}) => {
  const isEducation = variant === "education";
  return (
    <div
      className={`w-full p-3 border border-black rounded-3xl ${
        isEducation ? "bg-neutral-800 text-white" : ""
      }`}
    >
      {/* Date */}
      <div className="flex justify-between items-center mb-3">
        <span
          className={`grow-0 rounded-full px-2 py-1 text-xs ${
            isEducation ? "bg-white text-black" : "text-white"
          }`}
          style={isEducation ? undefined : { backgroundColor: "#919239" }}
        >
          {date}
        </span>
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-7 w-7 rounded-full"
        />
      </div>

      {/* Company & Position */}
      <div className="">
        <h5
          className={
            isEducation ? "text-xs text-white/80" : "text-xs text-black/80"
          }
        >
          {company}
        </h5>
        <p className={isEducation ? "text-white" : "text-black"}>{position}</p>
      </div>

      {/* Divider with dots */}
      {!isEducation && (
        <div className="relative flex items-center justify-between w-full py-2 mt-3">
          <div className="w-1 h-1 bg-black rounded-full" />
          <div className="flex-1 border-t border-black border-solid" />
          <div className="w-1 h-1 bg-black rounded-full" />
        </div>
      )}
    </div>
  );
};
export default ResumeCard;
