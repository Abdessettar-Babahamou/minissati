import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
 function NavBarLinks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex-col lg:flex-row flex-1  justify-center items-center gap-4 mt-20 lg:mt-0 ",
        className
      )}
    >
      {navLinks.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            className={cn("lg:text-white   text-xl hover:text-primary", {
              "!text-primary": index === 1,
            })}
            to={item.url}
          >
            {item.title}
          </Link>
          {navLinks.length - 1 !== index && (
            <span className="h-[1px] w-full lg:w-[4px] lg:h-6  bg-descriptionColor lg:bg-white flex">
              {" "}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavBarLinks;
