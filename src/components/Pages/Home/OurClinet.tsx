"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import TextGradient from "@/components/FramerMotion/TextGradian";

const OurClinet = () => {
  const clients = [
    {
      img: "https://img.freepik.com/premium-vector/people-code-human-developer-website-logo-vector-icon-illustration_7688-4319.jpg?w=826",
    },
    {
      img: "https://img.freepik.com/premium-vector/creative-logo-design-vector-illustration-tech-startup-company_1253202-45969.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_user",
    },
    {
      img: "https://img.freepik.com/premium-vector/code-icon-logo-design-made-color-pieces_205544-2867.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_user",
    },
    {
      img: "https://img.freepik.com/premium-vector/technology-logo-computer-data-related-business-hi-tech-innovative-link-network_243129-300.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_user",
    },
    {
      img: "https://img.freepik.com/premium-vector/vector-abstract-logo_782991-1.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_user",
    },
    {
      img: "https://img.freepik.com/premium-vector/creative-letter-s-logotype-abstract-hexagon-with-pixel-technology-logo-design-creative-dynamic-round-logotype-connection-symbol-design_144543-1685.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_user",
    },
  ];
  const titleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  };
  return (
    <div className=" py-16 bg-[#E7FAF9]">
      <motion.div
        className=" vigaRegular md:text-4xl text-xl font-semibold text-center pb-12"
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        <TextGradient title="Software Solutions for Top Companies" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-12">
        {clients.map((item, index) => (
          <motion.div
            key={index}
            className=" bg-white  shadow-sm rounded-sm flex justify-center items-center"
            whileHover={{
              scale: 1.07,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image src={item.img} width={200} height={200} alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurClinet;
