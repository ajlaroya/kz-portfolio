import { Card } from "@heroui/react";

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
    <div className="h-screen flex">
      <div className="w-1/4 h-full flex items-end">
        <div className="flex flex-col gap-4 p-8">
          {tags.map((tag) => (
            <div key={tag} className="">
              # {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-3/4 flex items-center justify-center p-8">
        <Card
          className="h-full w-full aspect-square"
          variant="secondary"
        ></Card>
      </div>
    </div>
  );
}
