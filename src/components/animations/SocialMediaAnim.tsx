// ไฟล์: src/components/animations/SocialMediaAnim.tsx
"use client";

export default function SocialMediaAnim() {
  return (
    <div className="w-full h-64 md:h-80 flex items-center justify-center relative overflow-hidden bg-black/20 rounded-2xl border border-white/5 shadow-inner group">
      {/* แสงวงกว้าง */}
      <div className="absolute inset-0 bg-fuchsia-500/5 rounded-full blur-[60px] group-hover:bg-fuchsia-500/10 transition-colors duration-700"></div>

      {/* วงโคจร (Rings) */}
      <div className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full border border-fuchsia-500/20 animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full border border-fuchsia-500/10 animate-[spin_15s_linear_infinite_reverse]"></div>

      {/* แกนกลาง (Data Core) */}
      <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 bg-[#170a1c] rounded-full flex items-center justify-center border border-fuchsia-500/40 shadow-[0_0_30px_rgba(217,70,239,0.3)] animate-pulse">
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-fuchsia-400">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </div>

      {/* โหนดแพลตฟอร์มต่างๆ (Floating Nodes) */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-fuchsia-400 rounded-full shadow-[0_0_15px_#d946ef] animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-[20%] w-2 h-2 bg-pink-300 rounded-full shadow-[0_0_10px_#f9a8d4] animate-ping" style={{ animationDuration: '3s' }}></div>

      {/* เส้น Data วิ่งๆ (SVG Dash) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
        <path d="M 50% 50% L 25% 25%" stroke="url(#fuchsia-grad)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
        <path d="M 50% 50% L 75% 75%" stroke="url(#fuchsia-grad)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="animate-[dash_3s_linear_infinite_reverse]" />
        <path d="M 50% 50% L 80% 33%" stroke="url(#fuchsia-grad)" strokeWidth="1" fill="none" strokeDasharray="2 4" className="animate-[dash_4s_linear_infinite]" />
        <defs>
          <linearGradient id="fuchsia-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </div>
  );
}