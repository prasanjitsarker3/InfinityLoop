"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const IndustryServe = () => {
  const services = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/2966/2966470.png",
      name: "Healthcare",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/3799/3799960.png",
      name: "E-Commerce",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/15616/15616414.png",
      name: "Education",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/15765/15765725.png",
      name: "Real-Estate",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/128/17209/17209234.png",
      name: "Hospitality",
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/128/8508/8508298.png",
      name: "Pharmacy",
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/128/6052/6052077.png",
      name: "UI/UX",
    },
    {
      id: 8,
      img: "https://cdn-icons-png.flaticon.com/128/1665/1665680.png",
      name: "Many More",
    },
  ];
  const colors = ["#BBFFCE", "#F3D5FF", "#FCF2CC", "#D0EAF2"];
  const getRandomGradient = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(to top, ${color}, transparent)`;
  };
  return (
    <div className="py-16">
      <div className=" py-16 bg-gradient-to-b from-[#B6E2F1] to-[#D1F3EF]">
        <div className=" flex  justify-center">
          <motion.div className="font-exotwo    text-4xl font-semibold  inline-block relative overflow-hidden">
            <div className=" mb-3">
              <TextGradient title="Industry We Serve" />
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1  bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc]"
              initial={{ width: "0%" }}
              animate={{
                width: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-12 gap-5 md:px-24 px-8 pt-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-hover-gradient flex flex-col justify-center items-center p-5 space-y-2 relative overflow-hidden bg-white"
            >
              <Image
                src={item.img}
                width={70}
                height={70}
                alt=""
                className=" p-3 shadow-md z-20"
                style={{ background: getRandomGradient() }}
              />
              <h1 className=" text-xl font-exotwo font-semibold z-20">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryServe;
