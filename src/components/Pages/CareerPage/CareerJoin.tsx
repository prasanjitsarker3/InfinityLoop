"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CareerJoin = () => {
  const joins = [
    {
      id: 1,
      name: "Exceptional Team",
      title:
        "We celebrate innovation and diversity & work with exceptional teams",
      img: "https://cdn-icons-png.flaticon.com/128/17344/17344410.png",
    },
    {
      id: 2,
      name: "Make an Impact",
      title: "Shape your career by carving your own path to success",
      img: "https://cdn-icons-png.flaticon.com/128/2920/2920349.png",
    },
    {
      id: 3,
      name: "Go Global",
      title:
        "You get opportunities to work at different locations around the world",
      img: "https://cdn-icons-png.flaticon.com/128/16897/16897661.png",
    },
  ];
  return (
    <div className=" py-16 md:px-0 px-8">
      <div className="bg-gradient-to-b from-[#B6E2F1] to-[#D1F3EF] py-16">
        <div className=" text-center vigaRegular text-4xl font-bold pb-12">
          <TextGradient title="Why you should join us?" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-16 gap-6 md:px-12 px-8">
          {joins.map((item) => (
            <motion.div
              key={item.id}
              className=" flex justify-center items-center bg-white "
              whileHover={{
                scale: 1.03,
                backgroundColor: "#55bbdd",
              }}
              transition={{ duration: 0.5, timing: "easeInOut" }}
            >
              <div className=" p-5 flex flex-col justify-center items-center space-y-1">
                <Image
                  src={item.img}
                  alt=""
                  width={60}
                  height={60}
                  className=" "
                />
                <h1 className=" vigaRegular text-3xl primary">{item.name}</h1>
                <p className=" font-exotwo text-xl text-slate-800 text-center">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerJoin;
