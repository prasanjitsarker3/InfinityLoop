"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HomeSolution = () => {
  const [active, setActive] = useState(1);
  const business = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/5579/5579145.png",
      name: "ERP",
      title: "Enterprise Resource Planning Software",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/17408/17408221.png",
      name: "GMS",
      title: "Garage Management Software",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3261/3261712.png",
      name: "Flight Booking",
      title: "Flight Booking Software",
    },
  ];
  const hospitality = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/11923/11923016.png",
      name: "Property Management", // More descriptive
      title: "Streamline Operations with Hotel Management Software",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/12211/12211216.png",
      name: "Guest Management", // More specific
      title: "Enhance Guest Experience with Hospitality Software",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/16563/16563389.png",
      name: "Reservation System", // Clearer
      title: "Effortless Booking with Reservation Management Software",
    },
  ];
  const ecommerce = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/3502/3502601.png",
      name: "Product Management",
      title: "Simplify Inventory & Orders with E-commerce Software",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/8188/8188077.png",
      name: "Marketing Automation",
      title: "Reach More Customers & Boost Sales with E-commerce Tools",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/5126/5126919.png",
      name: "Payment Processing",
      title:
        "Secure Transactions & Simplify Checkouts with E-commerce Solutions",
    },
  ];
  const healthcare = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/2309/2309962.png",
      name: "Hospital",
      title: "Hospital Management System With Website",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4320/4320365.png",
      name: "Pharmacare",
      title: "Pharmacy Software Made Easy",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/6283/6283314.png",
      name: "Clinic379",
      title: "Clinic Management System",
    },
  ];

  const randomColors = ["#E7FAF9", "#CFEFF4", "#E7FAF9"];

  return (
    <div className=" py-20 md:px-0 px-8">
      <div className=" text-center space-y-2 pb-12">
        <div className=" vigaRegular text-5xl font-bold">
          <TextGradient title="Our Solutions" />
        </div>
        <p className=" font-exotwo text-xl font-medium primary">
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>
      </div>
      <div className=" flex flex-wrap-reverse justify-center items-center gap-5">
        <button
          onClick={() => setActive(1)}
          className={
            active === 1
              ? " bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc] text-white py-2 px-5 rounded-sm shadow-sm"
              : "bg-[#003249] text-white py-2 px-5 rounded-sm shadow-sm"
          }
        >
          Business
        </button>
        <button
          onClick={() => setActive(2)}
          className={
            active === 2
              ? " bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc] text-white py-2 px-5 rounded-sm shadow-sm"
              : "bg-[#003249] text-white py-2 px-5 rounded-sm shadow-sm"
          }
        >
          Hospitality
        </button>
        <button
          onClick={() => setActive(3)}
          className={
            active === 3
              ? " bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc] text-white py-2 px-5 rounded-sm shadow-sm"
              : "bg-[#003249] text-white py-2 px-5 rounded-sm shadow-sm"
          }
        >
          E-Commerce
        </button>
        <button
          onClick={() => setActive(4)}
          className={
            active === 4
              ? " bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc] text-white py-2 px-5 rounded-sm shadow-sm"
              : "bg-[#003249] text-white py-2 px-5 rounded-sm shadow-sm"
          }
        >
          Healthcare
        </button>
      </div>

      <div className="mt-10">
        {active === 1 && (
          <motion.div
            className=" grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
          >
            {business.map((item, index) => (
              <motion.div
                key={index}
                className=" flex items-center gap-5  cursor-pointer p-5"
                style={{
                  backgroundColor: randomColors[index % randomColors.length],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={item.img} width={70} height={70} alt="" />
                <div>
                  <h1 className=" vigaRegular text-4xl font-semibold text-[#0DB0C8]">
                    {item.name}
                  </h1>
                  <h1 className=" font-exotwo text-xl font-medium primary">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {active === 2 && (
          <motion.div
            className=" grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
          >
            {hospitality.map((item, index) => (
              <motion.div
                key={index}
                className=" flex items-center gap-5  cursor-pointer p-5"
                style={{
                  backgroundColor: randomColors[index % randomColors.length],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={item.img} width={70} height={70} alt="" />
                <div>
                  <h1 className=" vigaRegular text-3xl font-semibold text-[#0DB0C8]">
                    {item.name}
                  </h1>
                  <h1 className=" font-exotwo text-lg font-medium primary">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {active === 3 && (
          <motion.div
            className=" grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
          >
            {ecommerce.map((item, index) => (
              <motion.div
                key={index}
                className=" flex items-center gap-5  cursor-pointer p-5"
                style={{
                  backgroundColor: randomColors[index % randomColors.length],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={item.img} width={70} height={70} alt="" />
                <div>
                  <h1 className=" vigaRegular text-3xl font-semibold text-[#0DB0C8]">
                    {item.name}
                  </h1>
                  <h1 className=" font-exotwo text-lg font-medium primary">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {active === 4 && (
          <motion.div
            className=" grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
          >
            {healthcare.map((item, index) => (
              <motion.div
                key={index}
                className=" flex items-center gap-5  cursor-pointer p-5"
                style={{
                  backgroundColor: randomColors[index % randomColors.length],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image src={item.img} width={70} height={70} alt="" />
                <div>
                  <h1 className=" vigaRegular text-3xl font-semibold text-[#0DB0C8]">
                    {item.name}
                  </h1>
                  <h1 className=" font-exotwo text-lg font-medium primary">
                    {item.title}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HomeSolution;
