"use client";

import { Boxes } from "./component/aceternity-ui/background-boxes";
import { Header } from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import About from "./component/About";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative">
        <Header />
        <div className="relative sm:mt-60 lg:pt-30" />
        <Boxes className="absolute z-10" />
        <Hero />
        {/* <div className="relative sm:pt-80 lg:pt-10">
          <Services />
        </div>
        <div className="relative">
          <About />
        </div>
        <div className="relative">
          <Contact />
        </div> */}
        <Footer />
      </div>
    </main>
  );
}
