"use client";

import { Button } from "@heroui/react";
import { ArrowDownRight } from "lucide-react";
import { Icon } from "@iconify/react";
import DraggableText from "./DraggableText";
import { useRef } from "react";

const tags = [
  "Illustration",
  "Branding",
  "Web Design",
  "Photography",
  "UI/UX",
  "Motion Graphics",
];

const Hero = () => {
  const squareRef = useRef<HTMLDivElement | null>(null);

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
          <div
            ref={squareRef}
            className="aspect-square size-145 bg-[#919239] rounded-2xl absolute bottom-0 left-0 mx-5"
          >
            {/* <DraggableText
              constraintRef={
                squareRef as unknown as React.RefObject<HTMLElement>
              }
            /> */}
          </div>
        </div>
      </div>

      <div className="h-20 px-6 border-t border-b border-gray-300 items-center  flex justify-end mt-10">
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
