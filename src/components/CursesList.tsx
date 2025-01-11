import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import axios from "axios";
import { baseUrl } from "@/constants";
import { Course } from "@/lib/types";

function CursesList() {
  const [courses, setcourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/courses`);
        setcourses(response.data["courses"]);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(courses);

  return !loading ? (
    courses.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8">
        {courses.map((item) => (
          <CourseItem course={item} key={item.id} />
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center text-3xl  m-20">No Data Found</div>
    )
  ) : (
    <div className="flex items-center justify-center w-full m-20 text-3xl">
      جاري التحميل ...
    </div>
  );
}

export default CursesList;
