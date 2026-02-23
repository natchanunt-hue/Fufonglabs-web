"use client";
import { motion } from "framer-motion";

export default function HeroPulse() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center opacity-50">
      <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
        {/* คลื่นสีน้ำเงิน/ม่วงขยับไปมาแบบนุ่มนวล */}
        <motion.path
          d="M 0,200 C 300,300 700,100 1000,200 L 1000,400 L 0,400 Z"
          fill="url(#glow-indigo)"
          animate={{
            d: [
              "M 0,200 C 300,300 700,100 1000,200 L 1000,400 L 0,400 Z",
              "M 0,200 C 400,150 600,250 1000,200 L 1000,400 L 0,400 Z",
              "M 0,200 C 300,300 700,100 1000,200 L 1000,400 L 0,400 Z"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* คลื่นสีเขียวมรกตซ้อนทับขยับช้าๆ */}
        <motion.path
          d="M 0,250 C 250,150 750,300 1000,250 L 1000,400 L 0,400 Z"
          fill="url(#glow-emerald)"
          animate={{
            d: [
              "M 0,250 C 250,150 750,300 1000,250 L 1000,400 L 0,400 Z",
              "M 0,250 C 350,350 650,150 1000,250 L 1000,400 L 0,400 Z",
              "M 0,250 C 250,150 750,300 1000,250 L 1000,400 L 0,400 Z"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <defs>
          <linearGradient id="glow-indigo" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glow-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}