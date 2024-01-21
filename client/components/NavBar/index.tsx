import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { UserCircle } from "lucide-react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-10 text-white border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-9">
            <NavigationMenuItem>
              <NavigationMenuLink href="/findfriends" className="hover:underline">
                Find Friends
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/findgroups" className="hover:underline">
                Find Groups
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/editprofile" className="hover:underline">Edit Profile</Link>
          <Avatar className="ml-2">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="dark:bg-black"
            />
            <AvatarFallback>CN</AvatarFallback>
            <UserCircle className="h-4 w-4 ml-2" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
