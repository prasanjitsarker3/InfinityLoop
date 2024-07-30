import ContactForm from "@/components/Pages/Home/ContactForm";
import IndustryServe from "@/components/Pages/Service/IndustryServe";
import ServiceBanner from "@/components/Pages/Service/ServiceBanner";
import ServiceTech from "@/components/Pages/Service/ServiceTech";
import React from "react";

const ServicePage = () => {
  return (
    <div className="">
      <ServiceBanner />
      <ServiceTech />
      <IndustryServe />
      <ContactForm />
    </div>
  );
};

export default ServicePage;
