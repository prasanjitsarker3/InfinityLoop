"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <div className=" relative">
      <motion.div
        className="background-shape-1 absolute inset-0 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="background-shape-2 absolute inset-0 z-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className=" relative h-[100vh]">
        <motion.div
          className="w-full h-full flex items-center md:px-0 px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className=" space-y-4">
            <div className=" vigaRegular text-5xl  font-bold">
              <TextGradient title="Our Services" />
            </div>
            <h1 className=" vigaRegular md:text-5x text-3xl primary font-bold">
              Best Offshore Software, Application, Digital & IT Solutions
            </h1>
            <h1 className=" font-exotwo text-xl text-slate-800">
              At Bdtask, we prioritize innovation, reliability, and client
              satisfaction. Let s accelerate together to your goal with our best
              software & IT service today.
            </h1>
            <div>
              <Link href="/contact">
                <motion.button
                  className="flex items-center gap-3 text-white md:py-3 py-2 px-5 rounded-md"
                  animate={{
                    background: [
                      "linear-gradient(to right, #0a6fd9, #0edcbc)",
                      "linear-gradient(to right, #0edcbc, #0a6fd9)",
                      "linear-gradient(to right, #0a6fd9, #0edcbc)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  Contact Us <Phone size={20} />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-[#003249] text-white md:p-6 p-3 inline-block   rounded-md shadow absolute bottom-12 to right-12 "
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <h1 className="vigaRegular md:text-4xl text-2xl font-bold text-center">
              3 +
            </h1>
            <h1 className="font-exotwo md:text-xl text-lg text-center">
              Years Experiences
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBanner;
