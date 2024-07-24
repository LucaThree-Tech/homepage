import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: any;
  className: any;
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateVisible = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY < lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateVisible);
    return () => {
      window.removeEventListener("scroll", updateVisible);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {/* Your existing FloatingNav content */}
      </motion.div>
    </AnimatePresence>
  );
};
