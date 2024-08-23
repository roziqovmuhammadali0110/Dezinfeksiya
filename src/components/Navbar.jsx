import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Importing icons from lucide-react
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true // Har bir element faqat bir marta animatsiyalanadi
    });
  }, []);

  const navItems = [
    { label: t("Основной"), href: "#asosiy" },
    { label: t("About"), href: "#about" },
    { label: t("Service"), href: "#service" },
    { label: t("FAQ"), href: "#faq" }
  ];

  const language = localStorage.getItem("i18nextLng");

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white shadow-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-md">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center flex-shrink-0"
            data-aos="fade-right">
            <a
              href="#"
              className="flex items-center w-[140px] h-[60px] justify-center lg:w-[220px] lg:h-[60px]">
              <img
                className="h-auto w-auto "
                src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
                alt="logo"
              />
            </a>
            <select
              value={language}
              name="Lng"
              id="lng"
              onChange={handleChange}
              className="border-2 rounded-md p-1 ml-3">
              <option value="ru">Русский</option>
              <option value="uz">Узбек</option>
              <option value="en">English</option>
            </select>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                data-aos="fade-right"
                className="hover:font-bold hover:underline hover:text-blue-500  hover:text-[18px]">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div
            className="hidden lg:flex justify-center space-x-12 items-center"
            data-aos="fade-right">
            <a
              href="#contact"
              className="p-3 mt-15 w-[200px] font-bold text-center inline-block rounded-full bg-[#3360ff] text-white hover:bg-blue-500">
              {t("boglanish")}
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4" data-aos="fade-right">
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                onClick={toggleNavbar}
                href="#contact"
                className="p-3 mt-15 w-[150px] text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
                data-aos="fade-right">
                {t("boglanish")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
