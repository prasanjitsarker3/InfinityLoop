"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useFormattedDate from "../Pages/Service/DateFormate";
import Link from "next/link";

const Footer = () => {
  const [temperature, setTemperature] = useState("");
  const date = new Date();
  const formattedDate = useFormattedDate(date);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchTemperature = () => {
      const simulatedTemperature = (Math.random() * 10 + 25).toFixed(1);
      setTemperature(simulatedTemperature);
    };

    fetchTemperature();
  }, []);
  return (
    <div className="w-full bg-gray-800 py-10">
      <div className=" flex flex-col md:flex-row  justify-between items-center md:gap-12 gap-3 md:px-36 px-18">
        <div className=" flex md:text-center text-left items-center gap-3">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src={"https://cdn-icons-png.flaticon.com/128/4007/4007846.png"}
              width={30}
              height={30}
              alt="Logo"
            />
            <p className="gradient-text font-bold text-inherit text-2xl">
              <span className="primary">Infinite</span>
              <span className="secondary">Loop</span>
            </p>
          </Link>
        </div>
        <div className="flex md:text-center text-left  items-center space-x-4 text-white">
          <h1>Service</h1>
          <h1>Contact Us</h1>
          <h1>Career</h1>
        </div>
        <div className="text-white flex md:text-center text-left items-center gap-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/12339/12339443.png"
            alt="Bangladesh Flag"
            width={30}
            height={30}
          />
          <h1>Dhaka, Bangladesh</h1>
          <h1 className=" ">{formattedDate}</h1>
          <h1 className=" ">
            {temperature !== null ? `${temperature}°C` : "Loading..."}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
