import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import CoreTechnologies from "@/components/sections/CoreTechnologies";
import WhyXibotix from "@/components/sections/WhyXibotix";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <CoreTechnologies />
        <WhyXibotix />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
