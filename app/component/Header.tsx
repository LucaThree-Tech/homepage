import { useScrollPosition } from "./aceternity-ui/hooks/use-scroll-position";
import { FloatingNav } from "./aceternity-ui/floating-navbar";

export const Header = () => {
  const scrollPosition = useScrollPosition();

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <FloatingNav
      navItems={navItems}
      className={`fixed top-0 inset-x-0 mx-auto transition-all duration-300 ${
        scrollPosition > 0
          ? "bg-black/75 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    />
  );
};
