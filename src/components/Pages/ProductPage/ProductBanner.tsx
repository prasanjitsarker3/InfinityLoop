"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductBanner = () => {
  return (
    <div className=" relative">
      <motion.div
        className="background-shape-1 absolute inset-0 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div className=" relative h-[100vh]">
        <motion.div
          className="w-full h-full flex flex-col md:flex-row items-center md:px-0 px-8 md:pt-0 pt-20 md:gap-0 gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2 w-full space-y-4">
            <div>
              <div className=" vigaRegular md:text-5xl text-3xl font-bold">
                <TextGradient title="Enhance Hospital work" />
              </div>
              <div className=" vigaRegular md:text-5xl text-3xl font-bold">
                <span className=" primary">activity with</span>
                <TextGradient title="Hospital" />
              </div>
              <div className=" vigaRegular md:text-5xl text-3xl font-bold">
                <TextGradient title="Management System |" />
              </div>
            </div>

            <h1 className=" font-exotwo text-xl text-slate-800">
              Hospital- Hospital Management System or HMS Software is mainly a
              System that can help to maintain any hospital activities properly
              and easily.
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
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={
                "https://img.freepik.com/free-vector/dashboard-user-panel_23-2148384405.jpg?t=st=1722342233~exp=1722345833~hmac=172d9d52f37e815a0ee9b52f2687acf32afcec4cd447ff51d075369e8fd499dd&w=1380"
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
          transition={{ duration: 0.5 }}
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

export default ProductBanner;
