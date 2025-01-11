 interface IconWithTitleProps{
    title: string;
    icon: string;
}
function IconWithTitle({title,icon}:IconWithTitleProps) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <img src={icon}  className="w-8 h-8"/>
      <h4 className="">{title}</h4>
    </div>
  );
}

export default IconWithTitle;
