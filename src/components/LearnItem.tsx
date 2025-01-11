import star from "../assets/star.png";
import { motion } from "framer-motion";

interface LearnItemProps {
  course_outputs: {
    title: string;
    description: string;
  };
  index: number;
}
function LearnItem({ course_outputs, index }: LearnItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 * index }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-10 p-8 bg-purpleColor rounded-xl w-full"
    >
      <img src={star} alt="" />
      <div className="flex gap-2 flex-col text-white">
        <h2 className="md:text-2xl font-bold">{course_outputs.title}</h2>
        <p className="text-sm md:text-base">{course_outputs.description} </p>
      </div>
    </motion.div>
  );
}

export default LearnItem;
