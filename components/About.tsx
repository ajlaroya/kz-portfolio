import ProfileHero from "./ui/ProfileHero";
import SectionHeader from "./ui/SectionHeader";
import ContactCard from "./ui/ContactCard";

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <ProfileHero
          imageSrc="/mnt/data/Screenshot 2025-12-15 164931.png"
          alt="Portrait of Kizza"
          nameLines={["My name", "is Kizza"]}
          caption={
            "I consider myself as a hardworking artist who constantly seeks new skills and explores diverse design styles to deliver the best result in every project."
          }
        />

        <div className="flex flex-col gap-6">
          <SectionHeader title="Introduction" />

          <div className="rounded-xl border-2 p-6 bg-white border-gray-300">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  A Graphic Designer based in Malaybalay, Philippines
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;ve always had strong passion in graphic design. I love crafting
                  designs that are not only visually pleasing but also functional,
                  solving problems through creativity and innovation.
                </p>
              </div>

              <div className="w-28 h-28 flex items-center justify-center" aria-hidden />
            </div>
          </div>

          <hr className="border-t border-gray-300" />

          <SectionHeader title="Get In Touch" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ContactCard
              variant="dark"
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              text="kizzabaniago@gmail.com"
            />

            <ContactCard variant="blue" icon={<span className="text-white font-bold">in</span>} text="linkedin.com/in/kizzybaniago" />

            <ContactCard variant="light" icon={<span className="text-gray-800 font-bold">Bē</span>} text="behance.net/KikiCre8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
