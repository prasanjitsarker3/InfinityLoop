"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import TextGradient from "@/components/FramerMotion/TextGradian";

const services = [
  {
    title: "Software Development",
    image: "https://cdn-icons-png.flaticon.com/128/3950/3950815.png",
    about:
      "We provide custom software development services tailored to your business needs.",
  },
  {
    title: "E-Commerce",
    image: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
    about:
      "Our e-commerce solutions help you build an online store and grow your business.",
  },
  {
    title: "Website Development",
    image: "https://cdn-icons-png.flaticon.com/128/4205/4205106.png",
    about:
      "Get a professional and responsive website that stands out from the competition.",
  },
  {
    title: "Blogging Platform",
    image: "https://cdn-icons-png.flaticon.com/128/11280/11280001.png",
    about:
      "We create blogging platforms that allow you to share your thoughts and ideas with the world.",
  },
  {
    title: "Mobile App Development",
    image: "https://cdn-icons-png.flaticon.com/128/5608/5608615.png",
    about:
      "Our mobile app development services help you reach customers on their favorite devices.",
  },
  {
    title: "Custom Development",
    image: "https://cdn-icons-png.flaticon.com/128/15716/15716398.png",
    about:
      "We offer custom development services to bring your unique ideas to life.",
  },
];

const randomColors = [
  "#E7FAF9",
  "#CFEFF4",
  "#E7FAF9",
  "#D1F3EF",
  "#E0F8F2",
  "#F3FBFC",
];

const HomeService = () => {
  return (
    <div className="py-20 md:px-0 px-8 w-full h-full">
      <div className=" text-center pb-12">
        <div className=" vigaRegular md:text-5xl text-3xl">
          <TextGradient title="Design Any Customized Software" />
        </div>
        <h1 className=" font-exotwo md:text-2xl  text-lg font-medium md:px-16 px-6">
          Infinity Loop Software Company is dedicated to meeting the unique
          needs of our clients. We specialize in designing and developing
          cutting-edge software solutions tailored to various industries.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="bg-hover-gradient relative overflow-hidden bg-white"
            style={{
              backgroundColor: randomColors[index % randomColors.length],
            }}
          >
            <motion.div className="flex flex-col items-center p-5  ">
              <Image
                src={item.image}
                width={80}
                height={80}
                alt={item.title}
                className=" z-20"
              />
              <h1 className="vigaRegular md:text-2xl text-xl font-semibold mt-4 text-center z-20">
                {item.title}
              </h1>
              <p className="mt-2 font-exotwo md:text-lg text-base text-center z-20">
                {item.about}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
