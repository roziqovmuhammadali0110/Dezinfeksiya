import { useEffect } from "react";
import bgFaq from "../assets/bgFaq.svg";
import dicons from "../assets/3dicons.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const SectionTwo = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // AOS init
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgFaq})` }}
      className="iconF h-[574px] w-full md:mx-0 bg-cover xs:p-5 bg-center rounded-2xl flex flex-col md:flex-row items-center justify-between mt-10"
      data-aos="fade-up" // Bu yerda animatsiya qo‘shiladi
    >
      <div
        className="w-full md:w-1/2 flex items-center justify-center h-full px-3 md:hidden xs:hidden sm:hidden lg:flex"
        data-aos="fade-left" // Bu yerda animatsiya qo‘shiladi
        data-aos-delay="200" // Animatsiya kechikishi (ms)
      >
        <img
          src="https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg"
          alt="Dezinfeksiya"
          className="h-auto w-[528px] md:max-w-full"
        />
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col items-center space-y-3 md:items-start justify-center h-full px-4 md:px-0"
        data-aos="fade-right" // Bu yerda animatsiya qo‘shiladi
        data-aos-delay="400" // Animatsiya kechikishi (ms)
      >
        <div className="space-y-4 text-center md:text-left">
          <div
            className="flex justify-center md:justify-start"
            data-aos="zoom-in" // Bu yerda animatsiya qo‘shiladi
            data-aos-delay="600" // Animatsiya kechikishi (ms)
          >
            <img
              src={dicons}
              alt="Icon"
              className="w-1/2 md:w-auto max-w-[100px] md:max-w-none"
            />
          </div>
          <h1 className="text-white font-bold text-[24px] sm:text-[16px] md:text-[28px] lg:text-[32px] xl:text-[38px] leading-[28px] sm:leading-[24px] md:leading-[36px] lg:leading-[42px] xl:leading-[48px]">
            {t("official_guarantee")}
          </h1>
        </div>
        <button
          className="font-bold w-[190px] h-[36px] rounded-[36px] bg-[#3360ff] text-[white] hover:bg-[#cbd5e1] hover:text-[black]"
          data-aos="fade-up"
          data-aos-delay="800">
          <a href="#contact">{t("boglanish")}</a>
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
