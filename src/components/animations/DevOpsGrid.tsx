"use client";
import { motion } from "framer-motion";

export default function DevOpsGrid() {
  return (
    <div className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-10 md:opacity-20 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Server Racks */}
        <rect x="140" y="40" width="40" height="20" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="140" y="70" width="40" height="20" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <rect x="140" y="100" width="40" height="20" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" />
        
        {/* Connection Lines */}
        <path d="M 40 80 L 100 80 L 100 50 L 140 50" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 40 80 L 140 80" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        <path d="M 40 80 L 100 80 L 100 110 L 140 110" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
        
        {/* CI/CD Processing Center */}
        <motion.circle cx="40" cy="80" r="14" fill="none" stroke="#3b82f6" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} strokeDasharray="10 10" />
        <circle cx="40" cy="80" r="6" fill="#3b82f6" opacity="0.8" />

        {/* Data Packets flowing to Servers */}
        <motion.circle cx="40" cy="80" r="3" fill="#fff" animate={{ cx: [40, 100, 100, 140], cy: [80, 80, 50, 50], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="40" cy="80" r="3" fill="#fff" animate={{ cx: [40, 140], cy: [80, 80], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "linear" }} />
        <motion.circle cx="40" cy="80" r="3" fill="#fff" animate={{ cx: [40, 100, 100, 140], cy: [80, 80, 110, 110], opacity: [0, 1, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "linear" }} />
      </svg>
    </div>
  );
}