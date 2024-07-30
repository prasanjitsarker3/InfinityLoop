/* eslint-disable react/no-unescaped-entities */
"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

const CareerBanner = () => {
  return (
    <div className=" relative">
      <motion.div
        className="background-shape-1 absolute inset-0 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className=" relative h-[100vh]">
        <motion.div
          className="w-full h-full flex flex-col md:flex-row items-center md:gap-0 gap-6 md:px-0 px-8 md:pt-0 pt-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-1/2 w-full space-y-4">
            <div className=" vigaRegular md:text-5xl text-3xl font-bold">
              <TextGradient title="Passionate about IT?" />
            </div>
            <h1 className=" vigaRegular md:text-5x text-3xl primary font-bold">
              Join our team
            </h1>
            <h1 className=" font-exotwo text-xl text-slate-800">
              We ignite innovation for growth. Passionate about tech, we thrive
              on open ideas and teamwork. Your growth is our focus. Join our
              visionary team!
            </h1>
            <h1 className=" font-exotwo text-xl primary">
              USA | Mexico | India | Bangladesh | Canada
            </h1>
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
              LET'S COLLABORATE
            </motion.button>
          </div>
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <video
              src={"/Photo/Banner/contact.mp4"}
              autoPlay
              loop
              muted
              className=" h-1/2 w-1/2 "
            /> */}
            <Image
              src={
                "https://media.istockphoto.com/id/2154101464/photo/we-are-hiring-written-post-it-hooked-by-a-fishing-hook.jpg?s=2048x2048&w=is&k=20&c=ooYCBgMdB0HCFuCrwnVemkU5f0UUrToX3_3fJo42jCw="
              }
              width={500}
              height={500}
              alt=""
            />
          </motion.div>
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

export default CareerBanner;
