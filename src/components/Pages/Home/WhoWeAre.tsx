"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TextGradient from "@/components/FramerMotion/TextGradian";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div className=" py-20 md:px-0 px-8">
      <div className=" w-full flex flex-col md:flex-row justify-between items-center md:gap-0 gap-6 mx-auto">
        <div className=" w-full md:w-1/2 mx-auto">
          <div className=" space-y-2">
            <motion.div className="font-exotwo  text-4xl font-semibold  inline-block relative overflow-hidden">
              <div className=" mb-3">
                <TextGradient title="Who We Are" />
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
            <h1 className=" vigaRegular md:text-5xl text-3xl primary ">
              Dreamt in Another World
            </h1>
            <h1 className=" vigaRegular md:text-5xl text-3xl primary">
              Accelerate Your Business with Automation.
            </h1>
            <p className=" font-exotwo md:text-xl  text-lg py-3">
              InfinityLoop is redefining automation. We specialize in AI-powered
              procurement negotiation and management, transforming the way
              businesses handle contracts. Our platform streamlines processes,
              provides strategic insights, and drives cost savings. Join us in
              shaping the future of business automation.
            </p>
            <Link href="/service">
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
                Explore Service <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
        <div className=" w-full md:w-1/2 mx-auto">
          <motion.div
            className=" flex justify-end"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
