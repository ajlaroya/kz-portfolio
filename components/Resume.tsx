import Avatar10 from "./ui/Avatars";
import ResumeCard from "./ui/ResumeCard";
import SectionHeader from "./ui/SectionHeader";

const Resume = () => {
  return (
    <section className="">
      <div className="grid grid-cols-3 border border-gray-300 min-h-[calc(100vh-60px)]">
        <div className="border-r border-gray-300 p-8">
          <SectionHeader title="Experience" />
          <div className="flex flex-col gap-5 mt-5">
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
          </div>
        </div>

        <div className="border-r border-gray-300 p-8 flex flex-col gap-3">
          <div>
            <SectionHeader title="Expertise" />
            <p className="pt-5 pb-2">
              Logo, Branding, Packaging, Poster & Editorial, Social Media Post,
              Motion Graphic
            </p>
            <div className="relative flex items-center justify-between w-full py-2">
              <div className="w-1 h-1 bg-black rounded-full" />
              <div className="flex-1 border-t border-black border-solid" />
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>

          <SectionHeader title="Hardskill" />
          <div className="bg-black rounded-3xl p-3">
            <div className="flex flex-col gap-3">
              <img
                src="/kizzy.webp"
                alt="kizzy"
                className="grayscale rounded-3xl max-h-35 object-cover"
              />
              {/* Skill Icons */}
              <Avatar10 />
            </div>
          </div>
          <div className="relative flex items-center justify-between w-full py-2">
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="flex-1 border-t border-black border-solid" />
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
          <SectionHeader title="Softskill" />
        </div>
        <div className="border-r border-gray-300 p-8">
          <SectionHeader title="Education" />
        </div>
      </div>
    </section>
  );
};
export default Resume;
