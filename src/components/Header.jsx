import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: false // Har bir skrollda animatsiya ishga tushishi
    });
  }, []);

  return (
    <header
      id="asosiy"
      className="relative w-full h-[580px] flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat xs:px-4 md:mx-0">
      {/* Orqa fon rasm faqat `lg` va undan kichik ekranlarda ko'rsatiladi */}
      <div
        className="absolute  inset-0 lg:hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg')"
        }}>
        {/* Orqa fon uchun shaffof qora qatlam */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 py-8 lg:px-16 lg:py-12">
        {/* Matn va tugmalar */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 w-full text-center lg:text-left">
          <div
            data-aos="fade-right"
            className="w-full lg:w-auto pb-16 space-y-10">
            <h1 className="text-[#3375FF] xs:text-[#d6c0ff] lg:text-[#3375FF] font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[48px] xl:leading-[56px]">
              {t("dizenfeksiya")}
            </h1>
            <p className=" flex items-center justify-center lg:justify-start lg:text-[#676D83] xs:text-white text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              <span className="max-w-[401px]">{t("diz")}</span>
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            data-aos="fade-up">
            <button className="font-bold w-[160px] sm:w-[180px] md:w-[190px] h-[40px] sm:h-[44px] md:h-[50px] rounded-[36px] bg-[#3360ff] text-white hover:bg-[#cbd5e1] hover:text-black">
              <a href="#contact">{t("boglanish")}</a>
            </button>
          </div>
        </div>
        {/* Rasm */}
        <div className="hidden lg:flex lg:w-1/2 lg:h-full">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
