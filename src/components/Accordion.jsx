import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content, isOpen, onClick, itemStyles }) => {
  return (
    <div style={{ borderBottom: "1px solid gray" }}>
      <button
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 1rem",
          outline: "none",
          backgroundColor: itemStyles.backgroundColor,
          color: isOpen ? "black" : itemStyles.color,
          borderRadius: itemStyles.borderRadius,
          cursor: "pointer",
          fontWeight: itemStyles.fontWeight,
          fontSize: "24px"
        }}
        onClick={onClick}>
        <span style={{ fontWeight: "600" }}>{title}</span>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#1D68F9" : "#F2F2F2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: isOpen ? "white" : "black"
          }}>
          <svg
            style={{
              width: "1.25rem",
              height: "1.25rem",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s"
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div style={{ padding: "1rem", fontSize: "13px", color: "#676D83" }}>
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const { t } = useTranslation(); // useTranslation() ichida namespace kerak emas
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: t("title"),
      content: t("content")
    },
    {
      title: t("title2"),
      content: t("content2")
    },
    {
      title: t("title3"),
      content: t("content3")
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemStyles = {
    backgroundColor: "white", // Change this to your desired background color
    color: "#676D83", // Change this to your desired text color
    borderRadius: "0px", // Change this to your desired border radius
    fontWeight: "700"
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          itemStyles={itemStyles}
        />
      ))}
    </div>
  );
};

export default Accordion;
