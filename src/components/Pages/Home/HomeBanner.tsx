"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import { ArrowRight, Play } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="background-shape absolute inset-0 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative h-[100vh] -mt-3 flex justify-center w-full mx-auto md:px-0 px-4 mf:pt-0 pt-16">
        <div className="w-full flex flex-col md:flex-row items-center md:gap-0 gap-8">
          <motion.div
            className="w-full md:w-1/2 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:space-y-4 space-y-2">
              <div className="vigaRegular md:text-5xl text-3xl font-bold">
                <span className="primary vigaRegular">Best </span>
                <TextGradient title="Software Solutions" />
              </div>
              <div className="vigaRegular md:text-5xl text-3xl font-bold">
                <TextGradient title="Architecting Your Digital Future" />
              </div>
              <h1 className="vigaRegular primary md:text-5xl text-3xl font-bold">
                For Next Generation
              </h1>
              <p className="md:text-2xl text-lg mt-5 text-slate-800 font-exotwo">
                We deliver cutting-edge software solutions that empower
                businesses to thrive in the digital age. Our expertise spans
                from web and mobile app development to cloud solutions and
                beyond.
              </p>
              <div>
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
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className=" relative">
              <div
                className={`video-overlay md:w-[70%] mx-auto absolute  inset-0 flex items-center justify-center bg-black bg-opacity-5 `}
              >
                <button
                  className="text-white bg-gradient-to-r from-[#0a6fd9] to-[#0edcbc] p-4 rounded-full focus:outline-none cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <Play size={48} />
                </button>
              </div>
              <video
                ref={videoRef}
                className="video-element md:w-[70%] mx-auto rounded-md"
                controls={false}
              >
                <source src={"/Photo/Banner/video.mp4"} type="video/mp4" />
              </video>
            </div>
            <motion.div
              className="bg-[#003249] text-white md:p-6 p-3 inline-block absolute md:top-2/3  rounded-md shadow"
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
    </div>
  );
};

export default HomeBanner;
