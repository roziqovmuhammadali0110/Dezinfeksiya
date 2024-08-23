import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: false // Har bir scroll bo'lganda animatsiyalar ishlaydi
    });

    // Scroll barni animatsiya tugashidan oldin o'chirish
    const handleAnimationStart = () => {
      document.body.style.overflow = "hidden"; // Scroll barni yashirish
    };

    const handleAnimationEnd = () => {
      document.body.style.overflow = "auto"; // Scroll barni qaytarish
    };

    document.addEventListener("aos:in", handleAnimationStart); // Animatsiya boshlanishi
    document.addEventListener("aos:out", handleAnimationEnd); // Animatsiya tugashi

    return () => {
      document.removeEventListener("aos:in", handleAnimationStart);
      document.removeEventListener("aos:out", handleAnimationEnd);
    };
  }, []);

  return (
    <div
      id="service"
      className=" xs:flex-col xs:items-center xs:justify-center md:block">
      <div>
        <h1
          className="text-[40px] leading-14 text-[#020C31] font-bold px-6"
          data-aos="fade-right">
          {t("Service")}
        </h1>
        <p
          className="w-[301px] h-[72px] text-[14px] leading-4 text-[#676D83] pl-6"
          data-aos="fade-right"
          data-aos-delay="100">
          {t("sama")}
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-between px-6 gap-6">
        <div
          className="w-full px-2 gap-4 py-10 space-y-3 flex-row bg-[#F3F6F6] p-7 rounded-lg flex xs:flex-col lg:flex lg:flex-row item-center justify-between"
          data-aos="fade-right"
          data-aos-delay="400">
          <div className="xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-[320px] justify-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dizinfeksiya-52660f2d.png"
              alt=""
            />
          </div>
          <div className="pt-2 container space-y-3">
            <h1 className="xs:text-[24px] md:text-[32px] text-[32px] w-[full] leading-10 xs:py-4 lg:py-0 text-[#020C31] font-bold">
              {t("Дезинфексия")}
            </h1>
            <p className="xs:text-[15px] md:text-[18px] text-[#009AA3] text-[18px] leading-[30px] font-medium ">
              {t("Ҳар")}
            </p>
          </div>
        </div>
        <div
          className="w-full px-2 gap-4 py-10 space-y-3 flex-row bg-[#F3F6F6] p-7 rounded-lg flex xs:flex-col lg:flex lg:flex-row item-center justify-between"
          data-aos="fade-right"
          data-aos-delay="400">
          <div className="xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-[320px] justify-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/dezinyeksiya-bea8e70f.png"
              alt=""
            />
          </div>
          <div className="pt-2 container space-y-3">
            <h1 className="xs:text-[24px] md:text-[32px] text-[32px] w-[full] leading-10 xs:py-4 lg:py-0 text-[#020C31] font-bold">
              {t("Ҳарa")}
            </h1>
            <p className="xs:text-[15px] md:text-[18px] text-[#009AA3] text-[18px] leading-[30px] font-medium ">
              {t("Кўп")}
            </p>
          </div>
        </div>
        <div
          className="w-full px-2 gap-4 py-10 space-y-3 flex-row bg-[#F3F6F6] p-7 rounded-lg flex xs:flex-col lg:flex lg:flex-row item-center justify-between"
          data-aos="fade-right"
          data-aos-delay="400">
          <div className="xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] w-[320px] justify-center">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/derazatsiya-83b522bf.png"
              alt=""
            />
          </div>
          <div className="pt-2 container space-y-3">
            <h1 className="xs:text-[24px] md:text-[32px] text-[32px] w-[full] leading-10 xs:py-4 lg:py-0 text-[#020C31] font-bold">
              {t("кемирув")}
            </h1>
            <p className="xs:text-[15px] md:text-[18px] text-[#009AA3] text-[18px] leading-[30px] font-medium ">
              {t("kemir")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
