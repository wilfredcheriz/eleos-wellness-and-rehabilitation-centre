"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimateWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 50 }} // Slide in from right
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }} // Slide out to left
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
