import { Avatar, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-12 border-b border-gray-200 items-center">
      {/* Logo / Name */}
      <div className="flex items-center gap-3">
        <Avatar size="sm">
          <Avatar.Image
            alt="Medium Avatar"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg"
          />
          <Avatar.Fallback>MD</Avatar.Fallback>
        </Avatar>
        <div>Kizza Baniago</div>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-3">
        <div>Graphic Designer</div>
        <Button isIconOnly variant="tertiary">
          <Icon icon="gravity-ui:magic-wand" />
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
