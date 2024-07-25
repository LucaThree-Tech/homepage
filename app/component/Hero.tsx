import React from "react";
import StatCard from "./StatCard";
import { HoverBorderGradient } from "./aceternity-ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="relative min-h-auto flex flex-col justify-center max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8 font-barlow">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left side with main content */}
        <div className="z-10 text-white md:w-1/2 pr-8 mb-8 md:mb-0">
          <h1 className="text-8xl font-bold mb-4">
            User-Centric
            <br />
            Blockchain
            <br />
            Consultancy
          </h1>
          <p className="text-3xl mb-6">
            Luca3 is a blockchain consultancy firm specialized in building
            blockchain-based solutions for anyone, anywhere.
          </p>
          <div className="flex space-x-4">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent font-barlow">
                Proof of Work
              </div>
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right side with statistics cards */}
        <div className="z-10 md:w-1/4 relative">
          <div className="grid grid-cols-1 gap-4">
            <StatCard value="3+" label="Years of Experience" />
            <StatCard value="25+" label="Decentralized Apps Built" />
            <StatCard value="80%" label="Hackathon Win Rate" />
            <StatCard value="5k+" label="Lines of Code Written" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
