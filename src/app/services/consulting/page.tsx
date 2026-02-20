import Link from "next/link";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 px-6 md:px-16 max-w-6xl mx-auto pb-20">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-flex items-center gap-2 transition-colors">
        <span>&larr;</span> Back to Home
      </Link>
      
      <div className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Architecture Consulting</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          บริการให้คำปรึกษาและออกแบบสถาปัตยกรรมระบบองค์กร (Enterprise Architecture) 
          เจาะลึกถึงระดับโครงสร้าง เพื่อค้นหาและขจัดปัญหาที่ฉุดรั้งประสิทธิภาพระบบของคุณ
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">System Design</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            ออกแบบโครงสร้างระบบใหม่ให้สอดคล้องกับ Business Logic ลดความซับซ้อน (Complexity) และเตรียมพร้อมสำหรับการสเกลในอนาคต
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Bottleneck Resolution</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            วิเคราะห์และค้นหาจุดคอขวดของการประมวลผล (Processing Bottleneck) ด้วยหลักการทางวิศวกรรมซอฟต์แวร์ เพื่อคืนความเร็วให้ระบบ
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Database Optimization</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            ปรับแต่ง Query, ทำ Indexing และวางโครงสร้าง Database ระดับสูง (High Concurrency DB) เพื่อรองรับทราฟฟิกหลักล้านได้อย่างเสถียร
          </p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-indigo-900/20 to-black p-10 rounded-3xl border border-indigo-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4">พร้อมยกระดับระบบของคุณแล้วหรือยัง?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          ให้ทีมวิศวกรของ Fufong Labs ช่วยประเมินและวางแผนโครงสร้างระบบของคุณ
        </p>
        <a href="mailto:info@fufonglabs.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors inline-block">
          ติดต่อนัดหมายรับคำปรึกษา
        </a>
      </div>
    </div>
  );
}