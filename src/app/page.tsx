import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="mb-20 text-center md:text-left relative">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-normal mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-600">
          Software Performance <br /> & Deep Tech R&D
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          ยกระดับโครงสร้างองค์กรด้วยระบบฐานข้อมูลขั้นสูง และวิศวกรรมประสิทธิภาพซอฟต์แวร์ระดับสากล 
          พร้อมรองรับการขยายตัว (Scalability) และขจัดปัญหาคอขวดอย่างไร้รอยต่อ
        </p>
      </section>

      {/* 2. Bento Grid Layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px]">
        
        {/* Box 1 (Span 2) - Engineering & Innovations */}
        <Link href="/services/ecommerce" className="md:col-span-2 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all group overflow-hidden relative flex flex-col justify-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gray-600 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
          {/* ปรับขนาดหัวข้อเป็น text-2xl ให้เท่ากล่องอื่น */}
          <h3 className="text-2xl font-bold mb-3 tracking-wide text-white">Engineering & Innovations</h3>
          {/* ปรับขนาดเนื้อหาเป็น text-sm (มือถือ) และ text-base (คอม) */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            บริการวิจัยและพัฒนา (R&D) ด้านเทคโนโลยี ครอบคลุมการออกแบบสถาปัตยกรรม <strong>E-commerce</strong> แบบ Scalable และนวัตกรรม <strong>Cloud Matrix Machine</strong> สำหรับการประมวลผลขั้นสูง
          </p>
        </Link>

        {/* Box 2 - Architecture Consulting */}
        <Link href="/services/consulting" className="bg-[#0f0f0f] rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-[#111] transition-all flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all"></div>
          {/* ปรับหัวข้อขึ้นมาเป็น text-2xl */}
          <h3 className="text-2xl font-bold mb-3 text-white">Architecture Consulting</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
            บริการให้คำปรึกษาและออกแบบสถาปัตยกรรมระบบองค์กร ขจัดปัญหาคอขวด (Bottleneck) และปรับแต่งฐานข้อมูล
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="text-[11px] md:text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">System Design</span>
            <span className="text-[11px] md:text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">DB Optimization</span>
          </div>
        </Link>

        {/* Box 3 - Hiring */}
        <Link href="/careers" className="bg-gradient-to-t from-[#050505] to-[#151515] rounded-3xl p-8 border border-white/10 flex flex-col justify-end relative overflow-hidden group hover:border-white/30 transition-all cursor-pointer">
          <div className="absolute top-6 right-6 bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.05)]">
            Now Hiring
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Frontend Dev</h3>
          <p className="text-gray-400 text-sm mb-4">React.js / Next.js / TypeScript</p>
          <div className="flex gap-2">
            <span className="text-gray-300 bg-white/5 px-2 py-1 rounded text-[11px] md:text-xs font-mono border border-white/5">Hybrid Work</span>
            <span className="text-gray-300 bg-white/5 px-2 py-1 rounded text-[11px] md:text-xs font-mono border border-white/5">Flexible Hours</span>
          </div>
        </Link>

        {/* Box 4 (Span 2) - Academic Excellence */}
        <Link href="/academic" className="md:col-span-2 bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 flex items-center justify-between hover:bg-[#111] transition-all cursor-pointer group">
           <div>
             <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-100 transition-colors text-white">Academic Excellence</h3>
             <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
               ร่วมเป็นคณะกรรมการพิจารณาผลงานวิจัยเวทีระดับโลก <br/>
               <strong className="text-gray-200">16th Symposium on Software Performance (SSP) 2025</strong> ณ ประเทศเยอรมนี
             </p>
           </div>
           <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
           </div>
        </Link>

      </section>
    </>
  );
}