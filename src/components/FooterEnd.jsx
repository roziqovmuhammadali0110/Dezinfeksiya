import address from "../assets/Frame 1948753427.png";
import calls from "../assets/Frame 1948753435.png";

const FooterEnd = () => {
  return (
    <div className="w-full flex items-start justify-start py-14">
      <div className=" xs:flex-col md:flex-row flex space-y-3 justify-center xs:items-start lg:justify-center xs:space-x-0 md:space-x-16 xs:p-2 lg:p-10">
        <div className="max-w-[278px]">
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-8 ">
          <span className="w-[500px] xs:max-w-[300px] md:w-[500px]">
            <a href="#home">
              <img src={address} alt="" />
            </a>
          </span>
          <span className="w-[500px] xs:w-[300px] md:w-[500px]">
            <a href="">
              <img src={calls} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;
