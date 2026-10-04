import Avatars from "./ui/Avatars";
import ResumeCard from "./ui/ResumeCard";
import SectionHeader from "./ui/SectionHeader";

const softskills = [
  "Communication",
  "Teamwork",
  "Problem-Solving",
  "Adaptability",
  "Time Management",
];

const experiences = [
  {
    date: "2025 - Present",
    logo: "/kicre8z.png",
    company: "Freelance",
    position: "Graphic designer (logo, brand identity, social media, etc)",
    accentColor: "#F58D8C",
  },
  {
    date: "2022 - 2024",
    logo: "/kicre8z.png",
    company: "Studio XYZ",
    position: "Senior Designer",
    accentColor: "#8CC6FF",
  },
  {
    date: "2020 - 2022",
    logo: "/kicre8z.png",
    company: "Agency LMN",
    position: "Junior Designer",
    accentColor: "#F5D88C",
  },
];

const educations = [
  {
    date: "2016 - 2020",
    logo: "/kicre8z.png",
    company: "University of Design",
    position: "Bachelor of Arts in Graphic Design",
    accentColor: "#919239",
  },
  {
    date: "2014 - 2016",
    logo: "/kicre8z.png",
    company: "Community College",
    position: "Associate Degree in Visual Arts",
    accentColor: "#919239",
  },
  {
    date: "2012 - 2014",
    logo: "/kicre8z.png",
    company: "High School",
    position: "High School Diploma",
    accentColor: "#919239",
  },
];

const Resume = () => {
  return (
    <section>
      <div className="grid grid-cols-3 border-gray-300 min-h-[calc(100vh-60px)] lg:max-w-[1200px] mx-auto place-items-center">
        <div className="p-8">
          <div>
            <SectionHeader title="Experience" />
            <div className="flex flex-col gap-5 mt-10 items-center">
              {experiences.map((exp) => (
                <ResumeCard
                  key={`${exp.company}-${exp.date}`}
                  date={exp.date}
                  logo={exp.logo}
                  company={exp.company}
                  position={exp.position}
                  accentColor={exp.accentColor}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col gap-3 items-left">
          <div>
            <SectionHeader title="Expertise" />
            <p className=" pb-2">
              Logo, Branding, Packaging, Poster & Editorial, Social Media Post,
              Motion Graphic
            </p>
            <div className="relative flex items-center justify-between w-full py-2">
              <div className="w-1 h-1 bg-black rounded-full" />
              <div className="flex-1 border-t border-black border-solid" />
              <div className="w-1 h-1 bg-black rounded-full" />
            </div>
          </div>

          <div>
            <SectionHeader title="Hardskill" />
            <div className="bg-black rounded-3xl p-4">
              <div className="flex flex-col gap-5">
                <img
                  src="/kizzy.webp"
                  alt="kizzy"
                  className="grayscale rounded-3xl max-h-35 object-cover"
                />
                {/* Skill Icons */}
                <Avatars />
              </div>
            </div>
          </div>

          {/* Divider (could be turned into reusable component) */}
          <div className="relative flex items-center justify-between w-full py-2">
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="flex-1 border-t border-black border-solid" />
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>

          <div>
            <SectionHeader title="Softskill" />
            <div className="flex flex-wrap gap-2">
              {softskills.map((skill, index) => (
                <span
                  key={index}
                  className=" border border-black text-black px-3 py-1 rounded-full text-sm"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center">
          <div>
            <SectionHeader title="Education" />
            <div className="flex flex-col gap-5 mt-10 items-center">
              {educations.map((edu) => (
                <ResumeCard
                  key={`${edu.company}-${edu.date}`}
                  date={edu.date}
                  logo={edu.logo}
                  company={edu.company}
                  position={edu.position}
                  accentColor={edu.accentColor}
                  variant="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
