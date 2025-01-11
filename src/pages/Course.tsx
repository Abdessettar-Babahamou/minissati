import Badge from "@/components/Badge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import most from "../assets/most.png";
import lavel from "../assets/level.png";
import IconWithTitle from "@/components/IconWithTytle";
import courseType from "../assets/courseType.png";
import lang from "../assets/lang.png";
import duration from "../assets/duration.png";
import time from "../assets/time.png";
import certficate from "../assets/certificate.png";
import user from "../assets/user.png";
import key from "../assets/key.png";
import discount from "../assets/discount.png";
import stuent from "../assets/Studentcertificate.png";
import SectionTitle from "@/components/SectionTitle";
import GroupItem from "@/components/GrpupItem";
import { Button } from "@/components/ui/button";
import LearnItem from "@/components/LearnItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/constants";
import { CourseDetails } from "@/lib/types";
import Lession from "@/components/Lession";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

function Course() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [courseDetails, setcourseDetails] = useState<CourseDetails | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/course/${id}`);

        setcourseDetails(response.data["course"]);
        console.log(loading);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const courseOutputs = courseDetails?.details.course_outputs;
  const outputsArray = courseOutputs ? Object.values(courseOutputs) : [];

  console.log(outputsArray);

  return (
    <div className="bg-primaryBgColor">
      <Header>
        <HeroContent>
          <div className="flex flex-wrap w-full mt-10 md:mt-0 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex lg:flex-1 flex-col  justify-center z-50 p-8 text-white gap-4"
            >
              <div className="flex gap-4">
                <Badge
                  title={"رائج الآن"}
                  icon={most}
                  className="bg-orangeColor"
                />
                <Badge
                  title={courseDetails?.basic_info.course_level!}
                  icon={lavel}
                />
              </div>
              <h2 className="md:text-[40px]">
                {courseDetails?.basic_info.name}
              </h2>
              <p className="md:text-2xl max-w-[591px]">
                {courseDetails?.basic_info.description}{" "}
              </p>
              <div className="flex gap-4 items-center">
                <h2 className="font-semibold md:text-[28px] text-primary ">
                  {courseDetails?.basic_info.course_original_price} دج
                </h2>
                <h3 className="font-light md:text-[28px] text-white line-through">
                  {courseDetails?.basic_info.course_discounted_price} دج
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-8 w-full ">
                <IconWithTitle
                  title={`نمط الدورة:  ${courseDetails?.details.specifications.course_type}`}
                  icon={courseType}
                />
                <IconWithTitle
                  title={`اللغة:  ${courseDetails?.details.specifications.course_language}`}
                  icon={lang}
                />
              </div>
              <div className="flex flex-wrap gap-2 md:gap-8">
                <IconWithTitle
                  title={`${courseDetails?.details.specifications.course_duration} مسجلة`}
                  icon={duration}
                />
                <IconWithTitle
                  title={`بداية الدورة:  ${courseDetails?.details.specifications.course_begin}`}
                  icon={time}
                />
              </div>
              <div className="flex gap-2 md:gap-8">
                <IconWithTitle
                  title={`${courseDetails?.details.specifications.course_certificate}`}
                  icon={certficate}
                />
              </div>
            </motion.div>

            {/* card */}

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex lg:flex-1 items-center justify-center p-4 z-50 "
            >
              <div
                className="flex flex-col   gap-4 
                 bg-white rounded-[30px] md:min-w-[480px]"
              >
                <SectionTitle
                  title={"التسجيل في الدورة"}
                  iconExist={true}
                  icon={user}
                  className="max-w-[200px]  md:max-w-[279px] bg-primary"
                />
                <div className="flex flex-col gap-4 p-4">
                  <h4 className="font-semibold">المجموعات المتوفرة</h4>
                  <GroupItem />
                  <GroupItem />
                  <GroupItem />
                  <Button
                    className="rounded-full bg-primary text-white text-xl 
                  px-[30px] py-[15px]"
                  >
                    سجل الآن
                  </Button>
                  <div className="flex gap-2">
                    <img src={key} alt="" />
                    <p className="text-sm ">صلاحيات الوصول: وصول دائم للدورة</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={discount} alt="" />
                    <p className="text-sm ">
                      أحصل على تخفيض 20% عند التسجيل الجماعي
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </HeroContent>
      </Header>

      <section className="flex flex-col p-8 gap-4 bg-white " id="hero">
        <h2 className="md:text-[32px] font-bold">
          ماذا ستتعلم في نهاية هذه الدورة؟
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 content-center">
          <div className="flex flex-col gap-4 p-4 items-center justify-center ">
            {outputsArray.map((item, index) => (
              <LearnItem course_outputs={item} key={index} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center flex-col gap-4 p-4 "
          >
            <img src={stuent} alt="" />
          </motion.div>
        </div>
      </section>
      <section className=" p-2 md:p-8 ">
        <div className="flex flex-col gap-4 bg-white w-full rounded-[35px]">
          <SectionTitle
            title={"برنامج الدورة"}
            className="max-w-[200px] md:max-w-[279px]  "
          />
          <div className="flex flex-col gap-4 items-center w-full p-4 md:p-8">
            <Accordion type="single" collapsible className=" w-full">
              <Lession
                title={"مقدمة في عالم التصميم الجرافيكي"}
                lessionNumber={"6 دروس"}
                duration={"7 ساعات ونصف"}
                value={"item-1"}
              />
              <Lession
                title={"إتقان برامج التصميم الأساسية"}
                lessionNumber={"6 دروس"}
                duration={"7 ساعات ونصف"}
                value={"item-2"}
              />
              <Lession
                title={"تطبيق المعرفة وإنشاء المشاريع"}
                lessionNumber={"6 دروس"}
                duration={"7 ساعات ونصف"}
                value={"item-3"}
              />
            </Accordion>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button className="px-8 md:px-[75px] py-[25px] rounded-full">
                <img src={user} alt="" />
                <span className="md:text-2xl font-bold text-white">
                  سجل الآن
                </span>
              </Button>
              <Button className="px-8 md:px-[75px] md:py-[25px] rounded-full bg-purple">
                <img src={user} alt="" />
                <span className="md:text-2xl font-bold text-white">
                  تسجيل جماعي
                </span>
              </Button>
            </div>
            <p className="text-descriptionColor text-center">
              استمتع بأسعار مخفضة من خلال التسجيل الجماعي
            </p>
          </div>
        </div>
      </section>

      <section className="p-2 md:p-8 ">
        <div className="flex flex-col gap-4 bg-white w-full rounded-[35px]">
          <SectionTitle
            title={"معلومات عن الدورة"}
            className="max-w-[200px] md:max-w-[279px] "
          />
          <div className="flex flex-col gap-8 p-8">
            <div className="flex p-4 shadow-3xl rounded-xl">
              <Accordion type="single" collapsible className=" w-full">
                <AccordionItem value="item-1" className="  ">
                  <AccordionTrigger
                    className="flex gap-8   w-full bg-white px-0  "
                    left={true}
                  >
                    <h2 className="text-xs md:text-2xl font-medium flex items-center gap-4">
                      {" "}
                      <Info />
                      متطلبات الدورة
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="pr-8">
                    <ul className="!list-disc space-y-2 ">
                      <li className="text-xs md:text-base">
                        حاسوب: يجب أن يكون لدى المتدرب حاسوب يعمل بنظام Windows
                        أو macOS.
                      </li>
                      <li className="text-xs md:text-base">
                        برامج: يجب تثبيت برامج Adobe Photoshop و Adobe
                        Illustrator على الحاسوب.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        اتصال بالإنترنت: للحصول على الموارد الإضافية والدعم
                        الفني.{" "}
                      </li>

                      <li className="text-xs md:text-base">
                        رغبة في التعلم: يجب أن يكون المتدرب متحمسًا للتعلم
                        والتطوير في مجال التصميم الجرافيكي.{" "}
                      </li>

                      <li className="text-xs md:text-base">
                        أساسيات الكمبيوتر: معرفة أساسية باستخدام الكمبيوتر
                        والإنترنت.{" "}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/*  */}

            <div className="flex p-4 shadow-3xl rounded-xl">
              <Accordion type="single" collapsible className=" w-full">
                <AccordionItem value="item-1" className="  ">
                  <AccordionTrigger
                    className="flex gap-8   w-full bg-white px-0  "
                    left={true}
                  >
                    <h2 className="text-xs md:text-2xl font-medium flex items-center gap-4">
                      {" "}
                      <Info />
                      وصف الدورة{" "}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="pr-8">
                    <ul className="!list-disc space-y-2 ">
                      <li className="text-xs md:text-base">
                        مقدمة شاملة: دورة مصممة خصيصًا للمبتدئين الراغبين في
                        اكتساب المهارات الأساسية في مجال التصميم الجرافيكي.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        أساسيات التصميم: تغطي الدورة المبادئ الأساسية للتصميم
                        مثل التكوين، الألوان، الخطوط، والتوازن، لتزويد المتدربين
                        بفهم عميق للجماليات البصرية.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        برامج التصميم: تركز الدورة على برامج التصميم الأكثر
                        شيوعًا مثل Adobe Photoshop و Adobe Illustrator، وتعلم
                        المتدربين كيفية استخدام الأدوات الأساسية في كل برنامج.{" "}
                      </li>

                      <li className="text-xs md:text-base">
                        رغبة في التعلم: يجب أن يكون المتدرب متحمسًا للتعلم
                        والتطوير في مجال التصميم الجرافيكي.{" "}
                      </li>

                      <li className="text-xs md:text-base">
                        مشاريع عملية: يتم تطبيق المعرفة النظرية من خلال مشاريع
                        عملية تتيح للمتعلمين تجربة مهاراتهم وتطويرها.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        تغذية راجعة: يقدم المدربون تغذية راجعة مستمرة للمتعلمين
                        لمساعدتهم على تحسين أعمالهم.{" "}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/*  */}

            <div className="flex p-4 shadow-3xl rounded-xl">
              <Accordion type="single" collapsible className=" w-full">
                <AccordionItem value="item-1" className="  ">
                  <AccordionTrigger
                    className="flex gap-8   w-full bg-white px-0  "
                    left={true}
                  >
                    <h2 className="text-xs md:text-2xl font-medium flex items-center gap-4">
                      {" "}
                      <Info />
                      لمن هذه الدورة؟{" "}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent className="pr-8">
                    <ul className="!list-disc space-y-2 ">
                      <li className="text-xs md:text-base">
                        المبتدئين الذين يرغبون في دخول عالم التصميم الجرافيكي.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        الطلاب الذين يدرسون التصميم أو المجالات ذات الصلة.{" "}
                      </li>
                      <li className="text-xs md:text-base">
                        الأشخاص الذين يرغبون في تطوير مهاراتهم في التصميم
                        لاحتياجاتهم الشخصية أو المهنية.{" "}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Course;
