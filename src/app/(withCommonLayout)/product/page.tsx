import ContactForm from "@/components/Pages/Home/ContactForm";
import ProductAutomation from "@/components/Pages/ProductPage/ProductAutomation";
import ProductBanner from "@/components/Pages/ProductPage/ProductBanner";
import ProductTime from "@/components/Pages/ProductPage/ProductTime";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <ProductBanner />
      <ProductAutomation />
      <ProductTime />
      <ContactForm />
    </div>
  );
};

export default ProductPage;
