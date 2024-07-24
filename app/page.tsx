"use client";

import { Boxes } from "./component/aceternity-ui/background-boxes";
import { Header } from "./component/Header";
import Hero from "./component/Hero";
import Stats from "./component/Stats";
import Services from "./component/Services";
import About from "./component/About";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Boxes className="absolute inset-0 z-0" />
      <Header />
      <div className="z-10 w-full">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
