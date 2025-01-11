import Badge from "./Badge";
import SubLession from "./SubLession";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface LessionProps{
    title:string,
    lessionNumber:string
    duration:string,
    value:string
}

function Lession({title,lessionNumber,duration ,value}:LessionProps) {
  return (
    <AccordionItem value={value} className="  ">
      <AccordionTrigger className="flex md:gap-8 justify-between w-full bg-white px-0  ">
        <h2 className="text-xs md:text-2xl font-medium">
          {title}
        </h2>
        <div className="flex flex-wrap flex-1 justify-end gap-4">
          <Badge title={lessionNumber} className="bg-purple" />
          <Badge
            title={duration}
            className="bg-purpleColor w-[150px]  px-4"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="md:pr-10">
        <SubLession />
      </AccordionContent>
    </AccordionItem>
  );
}

export default Lession;
