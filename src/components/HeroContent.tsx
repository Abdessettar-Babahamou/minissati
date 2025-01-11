import React from "react";
 
import { cn } from "@/lib/utils";

function HeroContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex  w-full h-full flex-1  z-10", className)}>
      {/* contant  */}

      {children}
    </div>
  );
}

export default HeroContent;
