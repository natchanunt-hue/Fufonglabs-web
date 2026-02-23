"use client";
import { motion } from "framer-motion";

export default function AINodes() {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" className="absolute top-0 right-0 pointer-events-none opacity-20 group-hover:opacity-80 transition-opacity duration-500">
      <motion.line x1="20" y1="80" x2="50" y2="20" stroke="#818cf8" strokeWidth="2" strokeDasharray="20" animate={{ strokeDashoffset: [20, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
      <motion.line x1="50" y1="20" x2="80" y2="70" stroke="#818cf8" strokeWidth="2" />
      <motion.circle cx="20" cy="80" r="4" fill="#818cf8" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      <motion.circle cx="50" cy="20" r="6" fill="#818cf8" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
      <motion.circle cx="80" cy="70" r="4" fill="#818cf8" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} />
    </svg>
  );
}