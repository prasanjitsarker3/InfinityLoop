import TextGradient from "@/components/FramerMotion/TextGradian";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Job = () => {
  const jobs = [
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: ".Net Developer",
      title: "USA, USA | Full Time, Permanent",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Java Developer",
      title: "Canada, Toronto | Full Time, Contract",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Python Developer",
      title: "UK, London | Part Time, Permanent",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Front-End Developer",
      title: "Australia, Sydney | Full Time, Permanent",
    },
    {
      id: 5,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Back-End Developer",
      title: "Germany, Berlin | Full Time, Contract",
    },
    {
      id: 6,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Full Stack Developer",
      title: "India, Bangalore | Full Time, Permanent",
    },
    {
      id: 7,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "DevOps Engineer",
      title: "Japan, Tokyo | Full Time, Contract",
    },
    {
      id: 8,
      img: "https://cdn-icons-png.flaticon.com/128/3985/3985018.png",
      name: "Data Scientist",
      title: "USA, San Francisco | Full Time, Permanent",
    },
  ];

  return (
    <div className=" py-20 md:px-0 px-8">
      <div className=" text-4xl vigaRegular text-center pb-12">
        <TextGradient title="CURRENT OPENINGS" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
        {jobs.map((item) => (
          <div
            key={item.id}
            className={` ${
              [1, 4, 5, 8].includes(item.id) ? "bg-slate-50" : "bg-[#e7f5fa]"
            }`}
          >
            <div className=" flex justify-between items-center p-3">
              <div className=" flex items-center gap-5">
                <Image src={item.img} width={50} height={50} alt="" />
                <div>
                  <h1 className=" font-exotwo font-semibold text-2xl primary">
                    {item.name}
                  </h1>
                  <p className=" font-exotwo text-lg">{item.title}</p>
                </div>
              </div>
              <button className="flex items-center gap-3 py-2 px-4 text-[#0caec8]">
                See More <ArrowRight size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center gap-6 pt-8">
        <button className="h-10 w-10 bg-[#0caec8] rounded-full flex justify-center items-center">
          <ArrowLeft size={20} className=" text-white " />
        </button>
        <button className="h-10 w-10 bg-[#0caec8] rounded-full flex justify-center items-center">
          <ArrowRight size={20} className=" text-white " />
        </button>
      </div>
    </div>
  );
};

export default Job;
