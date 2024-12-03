"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const services = [
  {
    title: "DApp Development",
    description: "Building decentralized applications for various use cases.",
  },
  {
    title: "Tokenization Services",
    description: "Creating and managing digital assets on the blockchain.",
  },
  {
    title: "Smart Contract Development",
    description: "Designing and implementing secure smart contracts.",
  },
  // Add more services as needed
];

function BlockchainBlock() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (meshRef.current) {
        const scrollProgress =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);
        const rotation = scrollProgress * Math.PI * 2;
        meshRef.current.rotation.y = rotation;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
}

export default function Services() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          setVisibleIndex(index);
        }
      });
    }, options);

    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach((item) => observer.observe(item));

    return () => {
      serviceItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="bg-black text-white flex">
      <div className="w-1/2 h-screen sticky top-0 left-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <BlockchainBlock />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div ref={servicesRef} className="w-1/2 px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold mb-12 text-center">Our Services</h2>
        {services.map((service, index) => (
          <div
            key={index}
            data-index={index}
            className={`service-item mb-20 transition-opacity duration-500 ${
              index === visibleIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
