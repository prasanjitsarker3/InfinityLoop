import TextGradient from "@/components/FramerMotion/TextGradian";
import Image from "next/image";
import React from "react";

const ProductTime = () => {
  const timelines = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/8521/8521787.png",
      name: "Registration of patients",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Check Schedule & Set Appointment",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Patient get returning confirmation",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Insurance Planing",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Consult with Doctor",
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Patient Case Study",
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Perform Medical Test",
    },
    {
      id: 8,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Transfer report between Laboratorist to Doctor",
    },
    {
      id: 9,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Starts treatment",
    },
    {
      id: 10,
      img: "https://cdn-icons-png.flaticon.com/128/9292/9292116.png",
      name: "Observation on Patient",
    },
  ];
  return (
    <div className=" py-16">
      <div className="  py-12">
        <div className=" vigaRegular md:text-5xl text-3xl font-bold  text-center pb-8">
          <TextGradient title="Working Flow of HMS Software" />
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 px-8">
          {timelines.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className={`${
                item.id % 2 == 0
                  ? "flex flex-col justify-center items-center px-4 py-2 bg-[#86cfe7] mb-12"
                  : "flex flex-col justify-center items-center px-4 py-2 bg-[#e7f5fa] mt-12"
              }`}
            >
              <Image src={item.img} width={30} height={30} alt={item.name} />
              <div>
                <p className="font-semibold text-base text-center">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 px-12">
          {timelines.slice(5, 10).map((item, index) => (
            <div
              key={index}
              className={`${
                item.id % 2 !== 0
                  ? "flex flex-col justify-center items-center px-4 py-2 bg-[#e7f5fa] mb-12"
                  : "flex flex-col justify-center items-center px-4 py-2 bg-[#86cfe7] mt-12"
              }`}
            >
              <Image src={item.img} width={30} height={30} alt={item.name} />
              <div>
                <p className="font-semibold text-base text-center">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTime;
