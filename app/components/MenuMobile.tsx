import { Home, Settings, Bell, User } from "lucide-react";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
} from "./Drawer";
import Image from "next/image";

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#home",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "About",
    href: "#about",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
  },
];

interface MenuMobileProps {
  isOpen: boolean;
  handleOpen: (open: boolean) => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, handleOpen }) => {
  return (
    <Drawer open={isOpen} onOpenChange={handleOpen} side="right">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex justify-center">
            <Image
              className="z-[100]"
              src="/web-development.png"
              width={25}
              height={25}
              alt="Logo"
              unoptimized
              priority
            />

            </div>
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-6 flex flex-col flex-1 items-center justify-evenly">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {item.icon}
              <span className="text-lg font-medium">{item.label}</span>
            </a>
          ))}
        </div>

        <DrawerFooter>
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image
              className="z-[100]"
              src="/web-development.png"
              width={25}
              height={25}
              alt="Logo"
              unoptimized
              priority
            />
            <span className="text-gray-900 dark:text-white text-lg tracking-wide">
              Matias Aramayo
            </span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuMobile;
