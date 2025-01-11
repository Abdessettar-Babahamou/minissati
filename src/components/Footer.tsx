import checkProfile from "../assets/Check Profile.png";
import cibCard from "../assets/carte_CIB.png";
import dahibiaCard from "../assets/dahobia.png";
import facbook from "../assets/facbook.png";
import x from "../assets/x.png";
import instgarem from "../assets/instagram.png";
import tictok from "../assets/tictok.png";
import yuoutoube from "../assets/youtoube.png";
import frame from "../assets/Frame.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div>
      <div className="flex flex-wrap  gap-4 items-center justify-center p-8 bg-purpleColor text-white overflow-hidden">
        <motion.img
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          src={checkProfile}
        />
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-lg md:text-[40px]   ">
            سجل الآن وابدأ رحلتك التعليمية
          </h2>
          <p className="text-sm md:text-2xl max-w-[537px]   ">
            إنضم إلينا الآن وابدأ رحلتك التعليمية لتطوير مهارات جديدة وتحقيق
            طموحاتك الشخصية والمهنية
          </p>
          <Button className="md:w-[236px] h-[69px] rounded-full text-lg  md:text-2xl  ">
            سجل معنا الآن
          </Button>
        </motion.div>{" "}
      </div>
      {/* footer */}
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 p-8 bg-darkPgColor">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-white font-bold">عن HoskaDev</h2>
          <div className="flex flex-col gap-8 text-white">
            <span className="">عن المنصة</span>
            <span className="">سياسة الخصوصية</span>
            <span className="">قواعد عامة</span>
            <span className="">تواصل معنا</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-white font-bold">روابط</h2>
          <div className="flex flex-col gap-8 text-white">
            <span className="">الدورات</span>
            <span className="">المقالات</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-2xl text-white font-bold">تحقق من شهادتك</h2>
          <div
            className="flex items-center bg-white  
            rounded-full lg:w-[370px] h-[60px] m-2 pr-2 py-2 shadow-3xl"
          >
            <Input
              className="border-none text-sm"
              placeholder="أدخل رقم الشهادة"
            />
            <Button className="!w-[96px] !h-[60px] rounded-full text-white font-bold ">
              تحقق
            </Button>
          </div>
          <h2 className="text-2xl text-white font-bold">
            وسائل الدفع المدعومة
          </h2>
          <div className="flex flex-wrap  gap-2">
            <img src={cibCard} />
            <img src={dahibiaCard} />
          </div>
        </div>

        <div className="flex  flex-col gap-4">
          <h2 className="text-2xl text-white font-bold">تابعنا</h2>
          <div className="flex flex-wrap gap-8">
            <a
              href="#"
              className="flex items-center justify-center !w-[70px] !h-[70px] bg-white rounded-full"
            >
              <img src={facbook} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center !w-[70px] !h-[70px] bg-white rounded-full"
            >
              <img src={x} />
            </a>{" "}
            <a
              href="#"
              className="flex items-center justify-center !w-[70px] !h-[70px] bg-white rounded-full"
            >
              <img src={instgarem} />
            </a>{" "}
            <a
              href="#"
              className="flex items-center justify-center !w-[70px] !h-[70px] bg-white rounded-full"
            >
              <img src={tictok} />
            </a>{" "}
            <a
              href="#"
              className="flex items-center justify-center !w-[70px] !h-[70px] bg-white rounded-full"
            >
              <img src={yuoutoube} />
            </a>
          </div>
        </div>
      </footer>
      <div className="flex flex-wrap gap-4 items-center justify-between bg-darkpurple p-8 text-white tex-xs">
        <p className="">جميع الحقوق محفوظة لدى HaskaDev 2025</p>
        <img src={frame} />
      </div>
    </div>
  );
}

export default Footer;
