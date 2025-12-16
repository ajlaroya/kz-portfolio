import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between h-15 px-6 border-b border-gray-300 items-center z-100 bg-white">
      {/* Logo / Name */}
      <div className="flex items-center gap-3">
        <Avatar size="sm">
          <Avatar.Image alt="Medium Avatar" src="/kicre8z.png" />
          <Avatar.Fallback>MD</Avatar.Fallback>
        </Avatar>
        <div>Kizza Baniago</div>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-3">
        <p>Graphic Design Portfolio</p>
        <Button isIconOnly variant="tertiary">
          <Icon icon="gravity-ui:magnifier" />
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
