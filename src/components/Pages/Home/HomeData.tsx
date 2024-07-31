"use client";
import Image from "next/image";
import React from "react";
import project from "../../../../public/Photo/Icon/project-management.png";
import product from "../../../../public/Photo/Icon/order.png";
import experts from "../../../../public/Photo/Icon/programmer.png";
import country from "../../../../public/Photo/Icon/countries.png";
import client from "../../../../public/Photo/Icon/customer-engagement.png";
import years from "../../../../public/Photo/Icon/expert.png";
import { motion } from "framer-motion";
import TextGradient from "@/components/FramerMotion/TextGradian";

const HomeData = () => {
  const items = [
    {
      img: project,
      number: "30 +",
      title: "Projects Completed",
    },
    {
      img: product,
      number: "20 +",
      title: "Custom Software Solutions",
    },
    {
      img: experts,
      number: "80 +",
      title: "Expert Team Members", // More descriptive
    },
    {
      img: country,
      number: "56 +",
      title: "Global Reach", // Shorter and clearer
    },
    {
      img: client,
      number: "5K +",
      title: "Happy Clients Worldwide",
    },
  ];
  return (
    <div className=" py-20 bg-[#E7FAF9]">
      <div className="text-center mb-12">
        <div className="text-3xl md:text-5xl font-bold ">
          <TextGradient title=" Unleash Your Potential" />
        </div>
        <p className="mt-4 text-lg md:text-xl primary">
          Harnessing the power of technology to drive innovation with our robust
          software platform
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5  gap-6 px-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className=" bg-white rounded-md py-5 px-3 flex flex-col justify-center items-center space-y-2"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
          >
            <Image src={item.img} width={50} height={50} alt="" />
            <h1 className=" vigaRegular text-4xl font-bold primary">
              {item.number}
            </h1>
            <h1 className=" font-exotwo text-xl font-medium text-slate-800">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeData;
