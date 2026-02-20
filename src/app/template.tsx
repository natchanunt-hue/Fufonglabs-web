"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. สถานะเริ่มต้นก่อนหน้าเว็บจะแสดง (โปร่งใสและเลื่อนลงมานิดนึง)
      initial={{ y: 20, opacity: 0 }}
      
      // 2. สถานะตอนที่หน้าเว็บแสดงผลแล้ว (ชัดเจนและกลับตำแหน่งเดิม)
      animate={{ y: 0, opacity: 1 }}
      
      // 3. การตั้งค่าความสมูท (ปรับ Ease ให้ดูพรีเมียมแบบ 120Hz)
      transition={{
        ease: [0.22, 1, 0.36, 1], // Cubic Bezier curve ที่ให้ความรู้สึกพุ่งปรู๊ดแต่เบรกนุ่มนวล
        duration: 0.5, // ความยาวของแอนิเมชัน (วินาที)
      }}
    >
      {children}
    </motion.div>
  );
}