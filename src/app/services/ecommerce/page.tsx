import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pt-32 px-6 md:px-16 max-w-6xl mx-auto pb-20">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-flex items-center gap-2 transition-colors">
        <span>&larr;</span> Back to Home
      </Link>
      
      <div className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-600/20 rounded-full blur-[80px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">E-Commerce Architecture</h1>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          พัฒนาระบบหลังบ้าน (Backend) และ API ขั้นสูงสำหรับธุรกิจ E-Commerce ระดับ Enterprise 
          รับประกันความเสถียรในช่วงแคมเปญใหญ่ที่ทราฟฟิกมหาศาล
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-400">High Concurrency Ready</h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            ปัญหาเว็บล่มช่วง Flash Sale จะหมดไป เราเชี่ยวชาญการออกแบบระบบที่รองรับการทำธุรกรรม (Transactions) พร้อมๆ กันหลักแสนรายการต่อวินาทีอย่างไร้รอยต่อ
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Scalable Microservices
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Distributed Caching (Redis/Memcached)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Asynchronous Message Queues
            </li>
          </ul>
        </div>

        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-400">Cloud & API Engineering</h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            ทำงานร่วมกับ Cloud Infrastructure ระดับโลก ออกแบบ API ที่ตอบสนองรวดเร็ว (Low Latency) และปลอดภัยตามมาตรฐานสากล
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> RESTful & GraphQL APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Cloud Matrix Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span> Zero-downtime Deployment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}