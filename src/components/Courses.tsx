import { Search } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SlidersHorizontal } from "lucide-react";
import CursesList from "./CursesList";

  function Courses() {
  return (
    <div className=" p-4 lg:p-8">
      <div className="flex flex-col gap-4 bg-white w-full rounded-[35px] ">
        {/* secteion header */}
        <div className="flex justify-between w-full">
          <SectionTitle title={"جميع الدورات"} />
          <div className="flex flex-1 justify-end  items-center pl-4 lg:pl-8">
            {/* search Input */}
            <div
              className="flex items-center bg-white  
            rounded-full  lg:w-[370px] h-[60px] m-2 pr-2 py-2 shadow-3xl"
            >
              <Input
                className="border-none text-sm"
                placeholder="إبحث عن دورة"
              />
              <Button className="!w-[60px] !h-[60px] rounded-full  ">
                <Search className="!w-8 !h-8 text-white" />
              </Button>
            </div>
            <Button className="!w-[60px] !h-[60px] rounded-full bg-white shadow-3xl  ">
              <SlidersHorizontal className="!w-8 !h-8 text-purpleColor" />
            </Button>
          </div>
        </div>
        {/* secteion header */}
        {/* couses items */}
        <CursesList />
      </div>
    </div>
  );
}

export default Courses;
