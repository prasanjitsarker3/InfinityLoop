import ContactForm from "@/components/Pages/Home/ContactForm";
import HomeBanner from "@/components/Pages/Home/HomeBanner";
import HomeData from "@/components/Pages/Home/HomeData";
import HomeService from "@/components/Pages/Home/HomeService";
import HomeSolution from "@/components/Pages/Home/HomeSolution";
import OurClinet from "@/components/Pages/Home/OurClinet";
import Testimonial from "@/components/Pages/Home/Testimonial";
import WhoWeAre from "@/components/Pages/Home/WhoWeAre";

export default function Home() {
  return (
    <div className=" pt-3">
      <HomeBanner />
      <HomeData />
      <HomeSolution />
      <WhoWeAre />
      <HomeService />
      <Testimonial />
      <OurClinet />
      <ContactForm />
    </div>
  );
}
