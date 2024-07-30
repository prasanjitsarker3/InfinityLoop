"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, SendHorizontal } from "lucide-react";
import TextGradient from "@/components/FramerMotion/TextGradian";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to a server
    console.log(formData);
  };
  return (
    <div className=" py-16 md:px-0 px-8">
      <div className="w-full h-full flex flex-col md:flex-row md:gap-0 gap-6 ">
        <div className=" md:w-1/2  md:pt-5">
          <div className=" space-y-4">
            <div className=" space-y-1">
              <h1 className=" vigaRegular text-4xl primary">
                Don’t Hesitate to
              </h1>
              <h1 className=" vigaRegular text-4xl primary">
                <span className=" font-bold">
                  <TextGradient title="contact" />
                </span>{" "}
                with us for any
              </h1>
              <h1 className=" vigaRegular text-4xl primary">
                kind of information
              </h1>
            </div>
            <div>
              <h1 className="flex items-center gap-5 font-exotwo font-medium text-2xl primary">
                <Phone size={20} /> +9898984548
              </h1>
              <h1 className="flex items-center gap-5 font-exotwo font-medium text-2xl primary">
                <Mail />
                infinityloop@gmail.com
              </h1>
            </div>
            <div className=" flex items-center gap-5">
              <Image
                src={
                  "https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
                }
                alt=""
                width={60}
                height={60}
                className=" bg-blue-100 p-3 rounded-full cursor-pointer"
              />
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                }
                alt=""
                width={60}
                height={60}
                className=" bg-blue-100 p-3 rounded-full cursor-pointer"
              />
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
                }
                alt=""
                width={60}
                height={60}
                className=" bg-blue-100 p-3 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 w-full mx-auto">
          <form onSubmit={handleSubmit} className="md:w-2/3 mx-auto">
            <div className="mb-2">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-b-2 border-[#0CAECB] focus:outline-none"
                placeholder="Full Name *"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-b-2 border-[#0CAECB] focus:outline-none"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-b-2 border-[#0CAECB] focus:outline-none"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-b-2 border-[#0CAECB] focus:outline-none"
                rows={3}
                placeholder="Your Message *"
                required
              />
            </div>
            <div className=" w-full">
              <motion.button
                type="submit"
                className="flex justify-center items-center gap-3 text-white  py-2 px-5 rounded-md w-full text-center"
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
                Send Message <SendHorizontal size={20} />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
