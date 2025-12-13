import { ArrowDownRight } from "lucide-react";

const tags = [
  "Illustration",
  "Branding",
  "Web Design",
  "Photography",
  "UI/UX",
  "Motion Graphics",
];

export default function Home() {
  return (
    <div className="h-[calc(100vh-120px)] flex p-6">
      <div className="w-1/3 h-full relative">
        <div className="absolute bottom-0 right-0">
          <div className="flex flex-col">
            <ArrowDownRight
              size={200}
              className="block ml-auto translate-x-12 translate-y-5"
            />
            {tags.map((tag) => (
              <p key={tag} className="text-2xl font-semibold my-1 text-right">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full p-10 relative">
        <div className="aspect-square size-130 bg-[#4D9168] rounded-2xl absolute bottom-0 left-0 mx-5"></div>
      </div>
    </div>
  );
}
