import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Badge from "./Badge";
import { desginLession } from "@/constants";
import { cn } from "@/lib/utils";
  
function SubLession() {
  return (
    <Accordion type="single" collapsible className=" w-full">
    <AccordionItem value="item-1" className="  ">
      <AccordionTrigger className="flex md:gap-8 justify-between w-full bg-white px-0 ">
        <h2 className="text-xs md:text-xl font-medium">
          ما هو التصميم الجرافيكي؟
        </h2>
        <div className="flex flex-wrap flex-1 justify-end gap-4">
          <Badge title={"3 دروس"} className="bg-purple" />
          <Badge
            title={"4 ساعات ونصف"}
            className="bg-purpleColor w-[150px] px-4"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="md:pr-40">
        <ol className=" space-y-4 list-disc list-inside">
          {desginLession.map((item, index) => (
            <li className="flex justify-between" key={index}>
              <div
                className={cn(
                  "flex items-center justify-center gap-2",
                  {
                    "text-purple": index == 1,
                  }
                )}
              >
                <span className="text-xs md:text-xl">
                  {" "}
                  {index + 1}.{" "}
                </span>
                <h2 className={cn("text-xs md:text-xl", {})}>
                  {item}
                </h2>
              </div>
              <div className="flex gap-4">
                <Badge
                  title={"3:56"}
                  className="bg-purpleColor "
                />
              </div>
            </li>
          ))}
        </ol>
      </AccordionContent>
    </AccordionItem>
  </Accordion>  )
}

export default SubLession
