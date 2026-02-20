import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="mb-6 text-sm text-gray-500 italic">มีผลบังคับใช้ตั้งแต่วันที่ 21 มิถุนายน พ.ศ. 2565</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">1. การยอมรับเงื่อนไข</h2>
        <p>การเข้าถึงและใช้งานเว็บไซต์ fufonglabs.com ของ <strong>บริษัท ฟูฟอง แลบส์ จำกัด</strong> ถือว่าคุณได้ยอมรับเงื่อนไขการใช้งานเหล่านี้ทั้งหมด</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">2. ขอบเขตบริการ</h2>
        <p>เนื้อหาบนเว็บไซต์นี้มีวัตถุประสงค์เพื่อนำเสนอบริการวิจัยและพัฒนาซอฟต์แวร์ (R&D), บริการที่ปรึกษาด้านสถาปัตยกรรมระบบ E-commerce และการนำเสนอผลงานทางวิชาการของบริษัทฯ เท่านั้น</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">3. ทรัพย์สินทางปัญญา</h2>
        <p>บรรดาเนื้อหา ข้อมูล บทความวิจัย โลโก้ เครื่องหมายการค้า และรหัสซอฟต์แวร์ที่ปรากฏบนเว็บไซต์นี้ เป็นทรัพย์สินทางปัญญาของบริษัทฯ หรือผู้ได้รับอนุญาต ห้ามมิให้ผู้ใดคัดลอก ดัดแปลง หรือนำไปใช้เพื่อประโยชน์ทางการค้าโดยมิได้รับอนุญาตเป็นลายลักษณ์อักษร</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">4. การปฏิเสธความรับผิด (Disclaimer)</h2>
        <p>แม้บริษัทฯ จะพยายามอย่างเต็มที่เพื่อให้ข้อมูลบนเว็บไซต์มีความถูกต้องและเป็นปัจจุบัน แต่บริษัทฯ ไม่รับประกันความสมบูรณ์หรือความถูกต้องของข้อมูลทั้งหมด และจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดจากการเข้าใช้งานเว็บไซต์นี้</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">5. กฎหมายที่บังคับใช้</h2>
        <p>เงื่อนไขการใช้งานฉบับนี้ให้ใช้บังคับและตีความตามกฎหมายของประเทศไทย</p>
      </section>
      
      <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Fufong Labs Co., Ltd. All rights reserved.
      </div>
    </div>
  );
}