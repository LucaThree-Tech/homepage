import { StickyScroll } from "./aceternity-ui/sticky-scroll-reveal";

export default function Services() {
  const content = [
    {
      title: "Blockchain Consulting",
      description: "Expert guidance on blockchain integration and strategy.",
    },
    {
      title: "Smart Contract Development",
      description: "Secure and efficient smart contract solutions.",
    },
    {
      title: "DApp Development",
      description: "Building decentralized applications for various use cases.",
    },
    {
      title: "Tokenization Services",
      description: "Creating and managing digital assets on the blockchain.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Our Services
      </h2>
      <StickyScroll content={content} />
    </section>
  );
}
