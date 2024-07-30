"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import Image from "next/image";
import React from "react";

const ProductAutomation = () => {
  const automations = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/12642/12642181.png",
      name: "Dynamic System",
      title:
        "Automated workflows for dynamic environments to enhance adaptability and efficiency across various operations.",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/11916/11916969.png",
      name: "Centralized Controlling System",
      title:
        "Unified control center for seamless management and monitoring of all integrated systems and processes.",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/15776/15776055.png",
      name: "Accumulative Service",
      title:
        "Integrated service accumulation and management system designed to streamline service delivery and resource utilization.",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/10365/10365660.png",
      name: "Intangible Handling",
      title:
        "Efficient management of intangible assets ensuring optimal utilization and strategic planning across various domains.",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/128/11411/11411453.png",
      name: "Ensure Medicare",
      title:
        "Automation for enhanced healthcare services aimed at improving patient care, operational efficiency, and data management.",
    },
  ];

  return (
    <div className=" py-16 ">
      <div className="bg-gradient-to-b from-[#B6E2F1] to-[#D1F3EF] py-12">
        <div className=" md:text-4xl text-3xl vigaRegular text-center font-bold">
          <TextGradient title="Apply Automation" />
          <h1 className=" primary font-bold">
            Be Skillful,Maximize,Profitability
          </h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:gap-8  gap-6 py-16 px-16">
          {automations.map((item) => (
            <div
              key={item.id}
              className="bg-hover-gradient relative overflow-hidden bg-white"
            >
              <div className=" flex flex-col justify-center items-center p-3 space-y-1">
                <Image
                  src={item.img}
                  alt=""
                  width={60}
                  height={60}
                  className=" z-20"
                />
                <h1 className=" primary font-semibold z-20">{item.name}</h1>
                <p className=" text-center text-xs text-slate-800 z-20">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAutomation;
