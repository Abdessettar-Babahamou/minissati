import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet";
 import NavBarLinks from "./navBar/NavBarLinks";
import NavBarButtons from "./navBar/NavBarButtons";

function MobileNav() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="bg-transparent">
          <Menu className="flex lg:hidden w-30 h-30 text-white   cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <NavBarLinks className="flex" />

          <NavBarButtons className="flex"/>
          </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileNav;
