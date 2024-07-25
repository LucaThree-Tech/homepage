import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "ABOUT", link: "#" },
    { name: "SERVICES", link: "#" },
    { name: "PROOF OF WORK", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-barlow
      ${
        isScrolled
          ? "bg-black bg-opacity-50 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto my-auto py-4 px-4 sm:md-6 lg:px-8 pd-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold font-barlow">
              LUCA3
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-white hover:text-purple-400 transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
