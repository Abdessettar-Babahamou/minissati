 import { Button } from './ui/button'
import users from "../assets/users.png";
import timer2 from "../assets/timer2.png";
import upload from "../assets/upload.png";
import user from "../assets/user.png";

function GroupItem() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2
    rounded-[25px] shadow-3xl">
    <div className="flex flex-col gap-1 items-center">
      <img src={users} alt="" />
      <span className="font-semibold text-xs ">3/5</span>
    </div>
    <div className="flex flex-col gap-4 ">
      <h3 className="text-xs md:text-sm font-semibold">سفيان و 2 آخرون</h3>
      <div className="flex gap-1 items-center">
        <img src={timer2} alt="" />
        <span className="text-[10px] ">05:23:47:32</span>
      </div>
    </div>
    {/*  */}
    <Button className="rounded-full text-white bg-purpleColor">
      <img src={user} alt="" className='w-4 h-4' />

      <span className="text-[10px] md:text-xs">إحجز مكانك الآن</span>
    </Button>
    <img src={upload} alt="" className='w-4 h-4' />

  </div>
  )
}

export default GroupItem
