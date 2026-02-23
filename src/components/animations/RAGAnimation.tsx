"use client";
import { motion } from "framer-motion";

export default function RAGAnimation() {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" className="absolute top-0 right-0 pointer-events-none opacity-20 group-hover:opacity-70 transition-opacity duration-500">
      <path d="M 20 50 L 50 50 L 80 50" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" />
      <motion.circle cx="20" cy="50" r="10" fill="none" stroke="#818cf8" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
      <rect x="15" y="45" width="10" height="10" fill="#818cf8" opacity="0.5" />
      <motion.polygon points="50,35 65,50 50,65 35,50" fill="#818cf8" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="80" cy="50" r="8" fill="#818cf8" opacity="0.8" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="20" cy="50" r="3" fill="#fff" animate={{ cx: [20, 50, 80], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
    </svg>
  );
}