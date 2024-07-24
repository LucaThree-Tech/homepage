"use client";
import React from "react";
import {
  Carousel,
  Card,
} from "@/app/component/aceternity-ui/apple-cards-carousel";
import Image from "next/image";

export default function About() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        About Luca3
      </h2>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                Revolutionizing blockchain technology.
              </span>{" "}
              Luca3 is at the forefront of blockchain innovation, providing
              cutting-edge solutions for businesses and developers alike.
            </p>
            <Image
              src="/images/blockchain-illustration.png"
              alt="Blockchain illustration"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Our Mission",
    title: "Empowering the Future of Web3",
    src: "/images/mission.jpg",
    content: <DummyContent />,
  },
  {
    category: "Our Vision",
    title: "Decentralized Solutions for All",
    src: "/images/vision.jpg",
    content: <DummyContent />,
  },
  {
    category: "Our Values",
    title: "Innovation, Security, Transparency",
    src: "/images/values.jpg",
    content: <DummyContent />,
  },
  {
    category: "Our Team",
    title: "Experts in Blockchain Technology",
    src: "/images/team.jpg",
    content: <DummyContent />,
  },
  {
    category: "Our Technology",
    title: "Cutting-edge Blockchain Solutions",
    src: "/images/technology.jpg",
    content: <DummyContent />,
  },
];
