import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true, // เพิ่มบรรทัดนี้เพื่อให้ Next.js ไม่ต้องพยายามบีบอัดรูปภาพเองบน Firebase
  },
};

export default nextConfig;