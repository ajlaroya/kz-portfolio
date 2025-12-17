import ResumeCard from "./ui/ResumeCard";
import SectionHeader from "./ui/SectionHeader";

const Resume = () => {
  return (
    <section className="">
      <div className="grid grid-cols-3 border border-gray-300 min-h-[calc(100vh-60px)]">
        <div className="border-r border-gray-300 p-10">
          <SectionHeader title="Experience" />
          <div className="flex flex-col gap-5 mt-5">
            <ResumeCard />
            <ResumeCard />
            <ResumeCard />
          </div>
        </div>
        <div className="border-r border-gray-300 p-10">
          <SectionHeader title="Expertise" />
        </div>
        <div className="border-r border-gray-300 p-10">
          <SectionHeader title="Education" />
        </div>
      </div>
    </section>
  );
};
export default Resume;
