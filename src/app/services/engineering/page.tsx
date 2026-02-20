import Link from "next/link";

export default function EngineeringServicePage() {
  return (
    <div>
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">&larr; Back to Home</Link>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Software R&D and Performance Engineering</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
        บริการให้คำปรึกษาด้านระบบพาณิชย์อิเล็กทรอนิกส์ (E-commerce) และการวางโครงสร้างระบบฐานข้อมูล 
        พร้อมการประมวลผลทางอินเทอร์เน็ตที่ขจัดปัญหาคอขวด (Bottlenecks) ได้อย่างสมบูรณ์
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-[#111] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4">High Concurrency Architecture</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            เราประยุกต์ใช้กฎของลิตเติล (Little's Law) ในการออกแบบระบบประมวลผลอินเทอร์เน็ต เพื่อให้สามารถรองรับผู้ใช้งานจำนวนมหาศาลได้อย่างมีประสิทธิภาพ
          </p>
          <div className="bg-black p-4 rounded-lg font-mono text-center text-lg text-blue-400">
            L = λW
          </div>
          <ul className="mt-4 text-sm text-gray-500 space-y-2">
            <li>L = จำนวนคำขอในระบบ</li>
            <li>λ = อัตราการหลั่งไหลเข้ามาของข้อมูล</li>
            <li>W = เวลาตอบสนองเฉลี่ย</li>
          </ul>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Scalable E-Commerce</h2>
          <p className="text-gray-400 leading-relaxed">
            พัฒนาระบบหลังบ้านและ API ขั้นสูง เพื่อรองรับธุรกิจระดับเอนเตอร์ไพรส์ 
            รับประกันความเสถียรและการขยายตัว (Scalability) อย่างไร้รอยต่อ
          </p>
        </div>
      </div>
    </div>
  );
}