import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-6">นโยบายความเป็นส่วนตัวนี้ฉบับนี้อธิบายถึงวิธีการที่ <strong>บริษัท ฟูฟอง แลบส์ จำกัด</strong> ("บริษัทฯ") เก็บรวมรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณ เมื่อคุณเข้าใช้งานเว็บไซต์ fufonglabs.com</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">1. ข้อมูลที่เราเก็บรวบรวม</h2>
        <p className="mb-4">เราเก็บรวบรวมข้อมูลที่คุณให้ไว้กับเราโดยตรงผ่านฟอร์มบนเว็บไซต์ ได้แก่:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ข้อมูลการติดต่อ: ชื่อ-นามสกุล, อีเมล, หมายเลขโทรศัพท์</li>
          <li>ข้อมูลการสมัครงาน: ประวัติการทำงาน (Resume), ลิงก์ Portfolio หรือ GitHub</li>
          <li>รายละเอียดข้อความหรือความต้องการที่คุณระบุในฟอร์มติดต่อ</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">2. วัตถุประสงค์ในการใช้ข้อมูล</h2>
        <p>เราใช้ข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>เพื่อตอบกลับการติดต่อสอบถามหรือนัดหมายรับคำปรึกษาด้านสถาปัตยกรรมซอฟต์แวร์</li>
          <li>เพื่อพิจารณาคุณสมบัติในการรับเข้าทำงานสำหรับตำแหน่งงานที่เปิดรับ</li>
          <li>เพื่อปรับปรุงประสิทธิภาพการใช้งานเว็บไซต์ให้ดียิ่งขึ้น</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">3. การคุ้มครองข้อมูลส่วนบุคคล (PDPA)</h2>
        <p>บริษัทฯ ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลตามกฎหมาย PDPA ของประเทศไทย ข้อมูลของคุณจะถูกเก็บรักษาไว้เป็นความลับและจะไม่ถูกเปิดเผยต่อบุคคลภายนอกเพื่อวัตถุประสงค์ทางการค้าโดยไม่ได้รับอนุญาต</p>
      </section>

      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mt-12 text-sm">
        <h3 className="text-white font-bold mb-2">สอบถามข้อมูลเพิ่มเติมเกี่ยวกับนโยบายความเป็นส่วนตัว</h3>
        <p>บริษัท ฟูฟอง แลบส์ จำกัด</p>
        <p>เลขที่ 9 ซอยเฉลิมพระเกียรติ ร.9 ซ.48 แยก 15 แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250</p>
      </div>
    </div>
  );
}