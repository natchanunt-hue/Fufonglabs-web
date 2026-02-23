"use client";
import { motion } from "framer-motion";

export default function DataPipeline() {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" className="absolute top-0 right-0 pointer-events-none opacity-20 group-hover:opacity-70 transition-opacity duration-500">
      <line x1="20" y1="30" x2="50" y2="50" stroke="#818cf8" strokeWidth="2" />
      <line x1="20" y1="70" x2="50" y2="50" stroke="#818cf8" strokeWidth="2" />
      <line x1="50" y1="50" x2="80" y2="50" stroke="#818cf8" strokeWidth="2" />
      <rect x="15" y="25" width="10" height="10" fill="#818cf8" />
      <rect x="15" y="65" width="10" height="10" fill="#818cf8" />
      <motion.circle cx="50" cy="50" r="8" fill="none" stroke="#818cf8" strokeWidth="2" animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} strokeDasharray="8 4" />
      <circle cx="80" cy="50" r="6" fill="#818cf8" />
      <motion.circle cx="20" cy="30" r="2.5" fill="#fff" animate={{ cx: [20, 50], cy: [30, 50], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <motion.circle cx="20" cy="70" r="2.5" fill="#fff" animate={{ cx: [20, 50], cy: [70, 50], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} />
      <motion.circle cx="50" cy="50" r="2.5" fill="#fff" animate={{ cx: [50, 80], opacity: [0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }} />
    </svg>
  );
}