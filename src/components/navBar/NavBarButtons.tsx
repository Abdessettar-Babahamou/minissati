import { cn } from "@/lib/utils";

function NavBarButtons({className}:{className?:string}) {
  return (
    <nav className={cn('flex-col  lg:flex-row  px-6 py-4 gap-4 mt-10 lg:mt-0',className)}>
      <button
        className="bg-transparent lg:text-white   text-xl
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
    </nav>
  );
}

export default NavBarButtons;
