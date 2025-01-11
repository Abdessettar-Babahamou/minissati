 import Logo from "./Logo";
 import MobileNav from "./MobileNav";
import NavBarLinks from "./navBar/NavBarLinks";
import NavBarButtons from "./navBar/NavBarButtons";

function NavBar() {
  return (
    <div className="flex items-center justify-between w-full  p-2 gap-2 z-50 relative">
      <Logo />
      {/* links */}
      <MobileNav/>
      <NavBarLinks className="hidden lg:flex"/>
      {/* buttons */}

      <NavBarButtons className="hidden lg:flex"/>
      {/* <div className=" hidden lg:flex  px-4 gap-4">
        <button
          className="bg-transparent   text-white text-xl
         px-6 py-3 rounded-full"
        >
          تسجيل الدخول
        </button>
        <button
          className="bg-primary hover:bg-primary/80 text-white text-xl
         px-6 py-3 rounded-full"
        >
          حساب جديد
        </button>
      </div> */}
    </div>
  );
}

export default NavBar;
