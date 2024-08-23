import React, { useState, useRef } from "react";
import axios from "axios";
import bg2 from "../assets/footerBg.svg";
import footerPerson from "../assets/footerPerson.svg";
import { AiOutlineCheckCircle } from "react-icons/ai"; // OK ikonasini import qilamiz
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const callRef = useRef(null);

  const SendMessage = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const call = callRef.current.value;

    if (!name || !call) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      setTimeout(() => setError(""), 3000); // 3 sekunddan keyin xatolik xabarini o'chirish
      return;
    }

    const phonePattern = /^\+998\d{9}$/; // O'zbekiston telefon raqami formati
    if (!phonePattern.test(call)) {
      setError("Iltimos, to'g'ri telefon raqamini kiriting.");
      setTimeout(() => setError(""), 3000); // 3 sekunddan keyin xatolik xabarini o'chirish
      return;
    }

    setLoading(true);
    const token = "7344232747:AAEjaU6XXZ9YPTfze-rKtNg2X1oBCD2JdQ0";
    const chat_id = 7015507246;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContext = `Ismi: ${name}\nTelefon raqami: ${call}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContext
      }
    })
      .then((res) => {
        setNotification("Muvaffaqiyatli yuborildi");
        setLoading(false);
        nameRef.current.value = "";
        callRef.current.value = "";
        setTimeout(() => setNotification(""), 3000); // 3 sekunddan keyin xabarni o'chirish
      })
      .catch((error) => {
        setNotification("Yuborishdagi xatolik");
        setLoading(false);
        setTimeout(() => setNotification(""), 3000); // 3 sekunddan keyin xabarni o'chirish
      });
  };

  return (
    <div className="xs:px-4 md:px-0 ">
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white p-2 rounded-md shadow-lg flex items-center">
          <AiOutlineCheckCircle className="mr-2" />
          {notification}
        </div>
      )}
      {error && (
        <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-2 rounded-md shadow-lg">
          {error}
        </div>
      )}
      <div
        id="contact"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: "100%"
        }}
        className="flex items-center xs:justify-center lg:justify-between rounded-xl">
        <div className="flex w-full h-full">
          <div className="w-full xs:w-full md:w-[50%] flex justify-center items-center p-4">
            <div className="max-w-md w-full mx-auto space-y-4 bg-white shadow-md rounded-xl p-6">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                {t("Малумот")}
              </h1>
              <form id="myForm" onSubmit={SendMessage} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ism"
                  id="name"
                  ref={nameRef}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="+998"
                  id="call"
                  ref={callRef}
                  pattern="\+998\d{9}"
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Iltimos, faqat telefon raqamini kiriting"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 border bg-[#242825] text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1 flex justify-center items-center font-medium"
                  disabled={loading}>
                  {loading ? "Loading..." : t("Юбориш")}
                </button>
              </form>
            </div>
          </div>
          <div className="xs:hidden sm:hidden w-[60%] flex md:flex justify-center items-end ">
            <div className="flex pt-3 flex-wrap ">
              <div className="md:pl-64 md:mt-0">
                <img
                  src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
                  alt="footer person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
