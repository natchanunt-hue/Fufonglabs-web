"use client";
import { motion } from "framer-motion";

export default function TrafficFlow() {
  return (
    <div className="absolute -bottom-10 -right-10 opacity-30 pointer-events-none">
      <svg width="250" height="200" viewBox="0 0 200 150">
        <path d="M 0 75 L 80 75" stroke="#34d399" strokeWidth="3" fill="none" opacity="0.3"/>
        <path d="M 80 75 C 100 75, 100 25, 150 25" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M 80 75 L 150 75" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M 80 75 C 100 75, 100 125, 150 125" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.3"/>

        <motion.circle cx="0" cy="0" r="4" fill="#fff" animate={{ cx: [0, 80, 150], cy: [75, 75, 25], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="0" cy="0" r="4" fill="#fff" animate={{ cx: [0, 80, 150], cy: [75, 75, 75], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
        <motion.circle cx="0" cy="0" r="4" fill="#fff" animate={{ cx: [0, 80, 150], cy: [75, 75, 125], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }} />
      </svg>
    </div>
  );
}