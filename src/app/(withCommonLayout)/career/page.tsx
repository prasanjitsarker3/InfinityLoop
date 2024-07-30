import CareerBanner from "@/components/Pages/CareerPage/CareerBanner";
import CareerJoin from "@/components/Pages/CareerPage/CareerJoin";
import Job from "@/components/Pages/CareerPage/Job";
import ContactForm from "@/components/Pages/Home/ContactForm";
import React from "react";

const CareerPage = () => {
  return (
    <div>
      <CareerBanner />
      <CareerJoin />
      <Job />
      <ContactForm />
    </div>
  );
};

export default CareerPage;
