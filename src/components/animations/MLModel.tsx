"use client";
import { motion } from "framer-motion";

export default function MLModel() {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" className="absolute top-0 right-0 pointer-events-none opacity-20 group-hover:opacity-70 transition-opacity duration-500">
      <path d="M 20 30 L 50 20 L 80 50 M 20 30 L 50 50 L 80 50 M 20 70 L 50 50 M 20 70 L 50 80 L 80 50" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
      <motion.circle cx="20" cy="30" r="4" fill="#818cf8" animate={{ r: [3, 5, 3] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="20" cy="70" r="4" fill="#818cf8" animate={{ r: [3, 5, 3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
      <motion.circle cx="50" cy="20" r="5" fill="#818cf8" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx="50" cy="50" r="5" fill="#818cf8" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
      <motion.circle cx="50" cy="80" r="5" fill="#818cf8" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
      <motion.circle cx="80" cy="50" r="6" fill="none" stroke="#818cf8" strokeWidth="2" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="80" cy="50" r="3" fill="#818cf8" />
    </svg>
  );
}