"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../../public/Photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal.png";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageSquareQuote,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: img,
      address: "123 Elm Street, Springfield, IL",
      companyName: "Tech Innovators Inc.",
      position: "CEO",
      feedback:
        "The custom software developed by Infinity Loop Software Company has greatly improved our workflow and efficiency. Highly recommended!",
      rating: 5,
      date: "2024-06-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: img,
      address: "456 Maple Avenue, Rivertown, NY",
      companyName: "Creative Solutions Ltd.",
      position: "Marketing Director",
      feedback:
        "Infinity Loop Software Company provided exceptional service and delivered a product that exceeded our expectations. Their attention to detail was impressive.",
      rating: 5,
      date: "2024-07-01",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: img,
      address: "789 Oak Road, Lakedale, CA",
      companyName: "FutureTech LLC",
      position: "CTO",
      feedback:
        "Working with Infinity Loop Software Company was a pleasure. Their team was professional, and the software solution they provided has been instrumental in our operations.",
      rating: 4,
      date: "2024-07-10",
    },
    {
      id: 4,
      name: "Bob Williams",
      image: img,
      address: "321 Pine Street, Metropolis, TX",
      companyName: "Data Dynamics Corp.",
      position: "Product Manager",
      feedback:
        "Infinity Loop Software Company’s expertise and innovative approach were exactly what we needed. The final product was delivered on time and met all our requirements.",
      rating: 4,
      date: "2024-07-20",
    },
    {
      id: 5,
      name: "Emily Davis",
      image: img,
      address: "654 Birch Lane, Greenfield, FL",
      companyName: "NextGen Enterprises",
      position: "Operations Manager",
      feedback:
        "The custom software provided by Infinity Loop Software Company is user-friendly and highly effective. Their support team was responsive and helpful throughout the project.",
      rating: 5,
      date: "2024-07-25",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const {
    name,
    image,
    address,
    companyName,
    position,
    feedback,
    rating,
    date,
  } = testimonials[currentIndex];

  return (
    <div className="py-20 md:px-0 px-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row  w-full h-full">
          <div className="md:w-1/2 w-full ">
            <div className="bg-[#F3FBFC]  flex flex-col justify-center items-center py-6 ">
              <Image
                src={image}
                width={500}
                height={500}
                alt={name}
                className="inline-block"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full bg-[#F3FBFC] space-y-3  md:px-0 px-8 py-6">
            <MessageSquareQuote size={20} className=" text-yellow-400" />
            <div className=" space-y-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className=" vigaRegular text-2xl primary">{companyName}</p>
              <p className=" vigaRegular text-xl primary">{position}</p>
            </div>
            <p className=" font-exotwo text-lg text-slate-800">{feedback}</p>

            <div className=" space-y-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    color={index < rating ? "#FFD700" : "#E0E0E0"}
                  />
                ))}
              </div>
              <p className=" flex items-center gap-3 text-slate-800">
                <CalendarDays size={15} />
                {date}
              </p>
              <p className=" flex items-center gap-3 text-slate-800">
                <MapPin size={18} />
                {address}
              </p>
              <div className=" flex justify-end pr-12">
                <MessageSquareQuote size={20} className="  text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center  gap-5 py-3">
          <button
            onClick={handlePrevious}
            className=" flex items-center justify-center h-12 w-12 rounded-full bg-[#0CAECB] text-white"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className=" flex items-center justify-center h-12 w-12 rounded-full bg-[#0CAECB] text-white"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
