import ContactBanner from "@/components/Pages/ContactPage/ContactBanner";
import WhyContactUs from "@/components/Pages/ContactPage/WhyContact";
import ContactForm from "@/components/Pages/Home/ContactForm";
import WhoWeAre from "@/components/Pages/Home/WhoWeAre";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <WhoWeAre />
      <WhyContactUs />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
