import curse1 from "../assets/course1.png";
import video from "../assets/video.png";
import level from "../assets/level.png";
import vector from "../assets/Vector.png";
import Rating from "./Rating";
import { Clock4 } from "lucide-react";
import Badge from "./Badge";
import SectionTitle from "./SectionTitle";
import { Course } from "@/lib/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CourseItemProps {
  course: Course;
}
function CourseItem({ course }: CourseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col shadow-3xl rounded-[35px] overflow-hidden"
    >
      <img src={curse1} className="!w-full" />
      {/* texts */}
      <div className="flex flex-col p-3 gap-4">
        <h2 className=" text-sm md:text-lg font-semibold">{course.name}</h2>
        <span className="text-descriptionColor text-xs">الأستاذ فلان فلان</span>
        {/* rating */}
        <div className="flex items-center gap-2 text-sm text-grayColor">
          <span className="text-descriptionColor">{course.rating}</span>
          <Rating />
          <div className="w-[3px] bg-descriptionColor h-[15px]"></div>
          <span className="text-descriptionColor    ">
            {course.number_of_ratings} تقييم
          </span>
        </div>
        {/* durations */}
        <div className="flex flex-wrap">
          <div className="flex gap-3 items-center justify-center p-1 text-xs md:text-base">
            <Clock4 className="!w-6 !h-6" />
            <span className="text-descriptionColor  ">
              {course.course_duration}
            </span>
            {/* <span className="text-descriptionColor">ساعات</span> */}
          </div>
          <div className="flex gap-2 items-center justify-center p-1">
            <img src={video} className="!w-6 !h-6" />
            <span className="text-descriptionColor  ">
              {course.course_lessons}
            </span>
            <span className="text-descriptionColor">درس</span>
          </div>

          <Badge title={course.course_level} icon={level} />
        </div>
        {/* price */}

        <div className="flex gap-4">
          <h2 className="font-semibold">{course.course_original_price} دج</h2>
          <h3 className="font-light text-descriptionColor line-through">
            {course.course_discounted_price} دج{" "}
          </h3>
        </div>
      </div>
      <div className="flex justify-between pr-3">
        <Badge title={"جديد"} icon={vector} className="bg-orangeColor" />
        <Link to={`course/${course.id}`}>
          <SectionTitle title={"التفاصيل"} subtitle="..." />
        </Link>
      </div>
    </motion.div>
  );
}

export default CourseItem;
