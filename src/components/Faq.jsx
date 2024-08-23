import React from "react";
import Accordion from "./Accordion";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div
      id="faq"
      className="border-t-2 xs:px-4 md:px-0 flex flex-col md:flex-row pt-7 justify-between gap-4 md:gap-8"
      data-aos="fade-up" // Animatsiya qo‘shish
    >
      <div className="w-full md:w-[15%] flex justify-center md:justify-start">
        <h1 className="xs:text-[24px] text-[32px] md:text-[40px] leading-[40px] md:leading-14 text-[#020C31] font-bold px-6">
          {t("ФАҚ")}
        </h1>
      </div>

      <div className="w-full md:w-[85%] lg:w-full flex flex-col ">
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
