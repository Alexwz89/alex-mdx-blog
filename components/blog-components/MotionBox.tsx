"use client";

import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function MotionBox() {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "pink",
      }}
    />
  );
}
