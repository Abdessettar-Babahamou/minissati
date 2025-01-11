import { cn } from "@/lib/utils";

interface BadgeProps {
  title: string;
  icon?: string;
  className?:string
}
function Badge({ title, icon ,className}: BadgeProps) {
  return (
    <div className={cn(`flex items-center justify-center gap-1 w-20 h-[28px] bg-greenColor rounded-full`,className)}>
      {icon && <img src={icon} className="!w-[14px] !h-[14px]" />}
      <span className="text-white text-xs p-1">{title}</span>
    </div>
  );
}

export default Badge;
