import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          A Foundation
          <br />
          for Data in
          <br />
          web3
        </h1>
        <p className="text-xl mb-8">
          SEDA creates a standard for
          <br />
          data interoperability enabling
          <br />
          the future of connectivity.
        </p>
        <div className="flex space-x-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded">
            LITEPAPER
          </button>
          <button className="border border-white text-white px-6 py-2 rounded">
            PRIMER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
