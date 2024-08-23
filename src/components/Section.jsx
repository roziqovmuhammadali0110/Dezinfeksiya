import { useEffect } from "react";
import miya from "../assets/miya.svg";
import kelishuv from "../assets/kelishuv.svg";
import sertifikat from "../assets/sertifikat.svg";
import boglanish from "../assets/boglanish.svg"; // SVG faylni import qilamiz
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);

  return (
    <div id="about" className=" ">
      <h1
        className="text-[40px] leading-10 text-[#020C31] font-bold px-6 py-10"
        data-aos="fade-up">
        {t("Ҳақида")}
      </h1>

      <div className="grid grid-cols-3 xs:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-between px-6 border-t-2 py-6">
        <div
          className="xs:border-2 lg:border-none rounded-lg py-5 p-3 space-y-3 flex items-start justify-start flex-col"
          data-aos="fade-up"
          data-aos-delay="100">
          <div>
            <img src={miya} alt="Tezda xizmat ko’rsatish" className="mx-auto" />
          </div>
          <h1 className="w-[250px] font-bold xs:text-[18px] md:text-[24px] leading-8 text-[#020C31]">
            {t("Тезда")}
          </h1>
          <p className="max-w-[300px] xs:text-[12px] md:text-[14px] leading-6 text-[#676D83]">
            {t("АРИЗА")}
          </p>
        </div>
        <div
          className="xs:border-2 lg:border-none rounded-lg p-3 py-5 space-y-3 flex items-start justify-start flex-col"
          data-aos="fade-up"
          data-aos-delay="200">
          <div>
            <img
              src={sertifikat}
              alt="Yetuk mutahasislarimiz"
              className="mx-auto"
            />
          </div>
          <h1 className="w-[250px] font-bold xs:text-[18px] md:text-[24px] leading-8 text-[#020C31]">
            {t("Наши")}
          </h1>
          <p className="max-w-[320px] xs:text-[12px] md:text-[14px] leading-6 text-[#676D83]">
            {t("БИЗ")}
          </p>
        </div>
        <div
          className="xs:border-2 lg:border-none rounded-lg p-3 py-5 space-y-3 flex items-start justify-start flex-col"
          data-aos="fade-up"
          data-aos-delay="300">
          <div>
            <img src={kelishuv} alt="Sizga maqul vaqtda" className="mx-auto" />
          </div>
          <h1 className="w-[250px] font-bold xs:text-[18px] md:text-[24px] leading-8 text-[#020C31]">
            {t("Сиз")}
          </h1>
          <p className="max-w-[300px] xs:text-[12px] md:text-[14px] leading-6 text-[#676D83]">
            {t("СИЗ")}
          </p>
        </div>
      </div>
      <div
        className="w-full h-[600px] rounded-b-2xl flex px-6 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${boglanish})` }}
        data-aos="fade-up"
        data-aos-delay="400">
        <div className="w-[50%] xs:hidden lg:flex"></div>
        <div className="xs:w-full lg:w-[50%] flex flex-col items-start justify-start">
          <h1
            className="text-white max-w-[558px] font-bold sm:text-[20px] lg:text-[40px] lg:leading-[44px]"
            data-aos="zoom-in"
            data-aos-delay="500">
            {t("klapa")}
          </h1>
          <p
            className=" max-w-[310px] text-[14px] leading-6 text-white pb-6"
            data-aos="zoom-in"
            data-aos-delay="600">
            {t("bizning")}
          </p>
          <button
            className="font-bold w-[190px] h-[36px] rounded-[36px] bg-[#3360ff] text-[white] hover:bg-[#cbd5e1] hover:text-[black]"
            data-aos="fade-up"
            data-aos-delay="700">
            <a href="#contact">{t("boglanish")}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
