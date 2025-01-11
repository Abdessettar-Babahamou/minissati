import { cn } from "@/lib/utils";

interface SecteionTitleProps {
  title: string;
  subtitle?: string;
  iconExist?: Boolean;
  icon?: string;
  className?:string
}
function SectionTitle({
  title,
  subtitle,
  iconExist,
  icon,
  className
}: SecteionTitleProps) {
  return (
    <div
      className={cn(`flex gap-2 items-center justify-center bg-purpleColor text-white
        px-4  lg:px-[50px] lg:py-[15px] 
    rounded-tr-[30px]  rounded-bl-[30px]`,className)}
    >
      {iconExist && <img src={icon} alt="icon" />}

      <span className="  ">
        {title}

        {subtitle && <span className="text-2xl  "> {subtitle}</span>}
      </span>
     </div>
  );
}

export default SectionTitle;
