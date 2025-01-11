import Badge from "@/components/Badge";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import most from "../assets/most.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <>
      <Header>
        <HeroContent className="h-screen z-50">
          <div className="flex flex-col h-full w-full justify-center z-50 p-8 text-white gap-4 ">
            <Carousel
              responsive={responsive}
              className="  h-full"
              showDots={true}
              rtl
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
              <div className="flex flex-col h-full w-fullz-50 p-8 text-white gap-4   ">
              <Badge
                  title={"رائج الآن"}
                  icon={most}
                  className="bg-orangeColor"
                />
                <h2 className="text-2xl md:text-[40px]">
                  دورة التصميم الغرافيكي
                </h2>
                <p className=" text-lg md:text-2xl max-w-[569px]">
                  تعلم أساسيات التصميم واستخدام برامج مثل Photoshop و
                  Illustrator لإنشاء تصاميم مبتكرة. مناسبة للمبتدئين والمحترفين،
                  مع تطبيق عملي لتحسين المهارات.
                </p>
                <Button className="max-w-[220px] h-16 rounded-full text-xl">
                  <span>تفاصيل الدورة</span>
                  <ChevronLeft className="!w-6 !h-6 text-2xl" size={30} />
                </Button>
              </div>
              <div className="flex flex-col h-full w-full justify-center z-50 p-8 text-white gap-4 ">
                <h2 className="text-2xl md:text-[40px]">
                  دورة تطوير تطبيقات الويب{" "}
                </h2>
                <p className=" text-lg md:text-2xl max-w-[569px]">
                  دورة تطوير تطبيقات الويب بإستخدام لغة PHP و إطار العمل Laravel{" "}
                </p>
                <Button className="max-w-[220px] h-16 rounded-full text-xl">
                  <span>تفاصيل الدورة</span>
                  <ChevronLeft className="!w-6 !h-6 text-2xl" size={30} />
                </Button>
              </div>
              <div className="flex flex-col h-full w-full justify-center z-50 p-8 text-white gap-4 ">
                <h2 className="text-2xl md:text-[40px]">
                  دورة تطوير تطبيقات الهاتف المحمول{" "}
                </h2>
                <p className=" text-lg md:text-2xl max-w-[569px]">
                  تعلم تطوير تطبيقات الهاتف بإستخدام Flutter من الصفر إلى
                  الاحتراف"{" "}
                </p>
                <Button className="max-w-[220px] h-16 rounded-full text-xl">
                  <span>تفاصيل الدورة</span>
                  <ChevronLeft className="!w-6 !h-6 text-2xl" size={30} />
                </Button>
              </div>
            </Carousel>
          </div>
        </HeroContent>
      </Header>

      {/* all courses */}
      <Courses />
      {/* start your jornay */}
      <Footer />
    </>
  );
}

export default Home;
