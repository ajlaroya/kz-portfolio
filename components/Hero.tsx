import { Button } from "@heroui/react";
import { ArrowDownRight } from "lucide-react";
import { Icon } from "@iconify/react";

const tags = [
  "Illustration",
  "Branding",
  "Web Design",
  "Photography",
  "UI/UX",
  "Motion Graphics",
];

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col">
      <div className="flex w-full h-full">
        <div className="w-1/3 relative">
          <div className="absolute bottom-0 right-0">
            <div className="flex flex-col">
              <ArrowDownRight
                size={200}
                strokeWidth={2.5}
                className="block ml-auto translate-x-11 translate-y-6"
              />
              {tags.map((tag) => (
                <p key={tag} className="text-2xl font-semibold my-1 text-right">
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/3 h-full p-10 relative">
          <div className="aspect-square size-145 bg-[#657153] rounded-2xl absolute bottom-0 left-0 mx-5" />
        </div>
      </div>

      <div className="h-20 px-6 border-t border-b border-gray-300 items-center bg-white flex justify-end mt-10">
        <div className="flex items-center gap-2">
          <p>See More</p>
          <Button isIconOnly variant="tertiary">
            <Icon icon="gravity-ui:arrow-down" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
