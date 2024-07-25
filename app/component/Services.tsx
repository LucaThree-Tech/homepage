import { useRef, useEffect } from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
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
  // ... add more services as needed
];

function BlockchainBlock() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Calculate target rotation based on scroll
      const targetRotation = scroll?.offset * Math.PI * 2;

      // Interpolate current rotation towards target rotation
      meshRef.current.rotation.y +=
        (targetRotation - meshRef.current.rotation.y) * 0.1;

      // Optional: add some gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servicesRef.current) {
        const scrollPosition = window.scrollY;
        const serviceItems =
          servicesRef.current.querySelectorAll(".service-item");
        serviceItems.forEach((item, index) => {
          const itemTop = item.getBoundingClientRect().top + scrollPosition;
          if (scrollPosition > itemTop - window.innerHeight / 2) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={servicesRef}
      className="py-20 px-4 md:px-8 bg-black text-white"
    >
      <h2 className="text-5xl font-bold mb-12 text-center">Our Services</h2>
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item mb-20 opacity-0 transition-opacity duration-500"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-xl">{service.description}</p>
              </div>
              <div className="md:w-1/2 h-[300px]">
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <BlockchainBlock />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
