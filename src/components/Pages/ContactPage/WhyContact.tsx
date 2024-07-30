"use client";
import TextGradient from "@/components/FramerMotion/TextGradian";
import React from "react";

const WhyContactUs = () => {
  const cards = [
    {
      title: "Cutting-Edge Software Solutions",
      description:
        "We specialize in developing innovative software solutions that drive business growth. Our team of experts stays up-to-date with the latest technologies to deliver exceptional results.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any queries or issues. We are committed to providing exceptional customer service.",
    },
    {
      title: "Tailored Strategies",
      description:
        "We create tailored strategies that meet the unique needs of your business. Our approach ensures maximum efficiency and effectiveness in achieving your goals.",
    },
    {
      title: "Comprehensive Services",
      description:
        "From development to deployment, we offer comprehensive services that cover every aspect of your project. Our holistic approach guarantees seamless integration and optimal performance.",
    },
  ];

  return (
    <div className="py-16">
      <div className=" py-16 bg-gradient-to-b from-[#B6E2F1] to-[#D1F3EF]">
        <div className="container mx-auto px-4">
          <div className="text-4xl font-bold text-center mb-12">
            <TextGradient title="Why Contact Us" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-16">
            {cards.map((card, index) => (
              <div key={index} className="card bg-white ">
                <div className="card-body p-6">
                  <h2 className="card-title text-2xl font-semibold mb-4 text-[#0DAFC9]">
                    {card.title}
                  </h2>
                  <p className=" primary mb">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyContactUs;
