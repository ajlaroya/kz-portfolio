import ProfileHero from "./ui/ProfileHero";
import SectionHeader from "./ui/SectionHeader";
import ContactCard from "./ui/ContactCard";
import { Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <ProfileHero
          alt="Portrait of Kizza"
          nameLines={["My name", "is Kizza"]}
          caption={
            "I consider myself as a hardworking artist who constantly seeks new skills and explores diverse design styles to deliver the best result in every project."
          }
        />

        <div className="flex flex-col gap-6 col-span-3">
          <SectionHeader title="Introduction" />

          <div className="rounded-xl border p-6 bg-white border-gray-300">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  A Graphic Designer based in Malaybalay, Philippines
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;ve always had strong passion in graphic design. I love
                  crafting designs that are not only visually pleasing but also
                  functional, solving problems through creativity and
                  innovation.
                </p>
              </div>

              <img
                className="w-28 h-28 flex items-center justify-center"
                src="/kicre8z.png"
              />
            </div>
          </div>

          <hr className="border-t border-gray-300" />

          <SectionHeader title="Get In Touch" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ContactCard
              variant="dark"
              icon={<Mail size={50} />}
              text="kizzabaniago@gmail.com"
            />

            <ContactCard
              variant="blue"
              icon={<Linkedin size={50} />}
              text="linkedin.com/in/kizzybaniago"
            />

            <ContactCard
              variant="light"
              icon={
                <span className="text-gray-800 font-extrabold text-4xl tracking-tight">
                  Bē
                </span>
              }
              text="behance.net/KikiCre8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
