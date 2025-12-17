const ResumeCard = () => {
  return (
    <div className="block max-w-sm p-3 border border-black rounded-3xl">
      {/* Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="bg-[#F58D8C] grow-0 text-white rounded-full px-2 py-1 text-sm">
          2025 - Present
        </span>
        <img src="/kicre8z.png" alt="logo" className="h-7 w-7 rounded-full" />
      </div>

      {/* Company & Position */}
      <div className="mb-3">
        <h5 className="text-sm text-black/60">Freelance</h5>
        <p className="text-body">
          Graphic designer (logo, brand identity, social media, etc)
        </p>
      </div>

      {/* Divider with dots */}
      <div className="relative flex items-center justify-between w-full py-2">
        <div className="w-1 h-1 bg-black rounded-full" />
        <div className="flex-1 border-t border-black border-solid" />
        <div className="w-1 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
};
export default ResumeCard;
