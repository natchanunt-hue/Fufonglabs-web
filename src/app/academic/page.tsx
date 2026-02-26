"use client";

import Link from "next/link";

export default function AcademicPage() {
  return (
    <div>
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Excellence</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
        ความน่าเชื่อถือทางเทคโนโลยี (Technical Authority) ผ่านผลงานวิจัยระดับสากลที่เป็นรากฐานของซอฟต์แวร์ประสิทธิภาพสูง
      </p>

      {/* Symposium Section */}
      <div className="bg-linear-to-r from-[#111] to-[#0a0a0a] p-8 rounded-3xl border border-white/10 mb-16">
        <h2 className="text-2xl font-bold mb-2 text-white">16th Symposium on Software Performance (SSP) 2025</h2>
        <p className="text-blue-400 mb-4 font-mono text-sm">📍 Kiel, Germany</p>
        <p className="text-gray-300 leading-relaxed">
          Fufong Labs ได้รับเกียรติร่วมเป็นหนึ่งในคณะกรรมการจัดงานและประเมินผลงานวิชาการ (Program Committee) 
          ร่วมกับสถาบันวิจัยชั้นนำระดับโลก เพื่อกำหนดมาตรฐานใหม่ของวิศวกรรมประสิทธิภาพซอฟต์แวร์
        </p>
      </div>

      {/* Featured Research Insights */}
      <h2 className="text-3xl font-bold mb-6">Featured Research Insights</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        
        {/* Blog 1: Cloud Architecture */}
        <div 
          onClick={() => window.open('https://arxiv.org/abs/2205.07421', '_blank')}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 hover:bg-white/8 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </div>
          <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4">Cloud Architecture</span>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors pr-8">
            Julia Cloud Matrix Machine: การสเกล Cluster บนคลาวด์
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
            งานวิจัยการออกแบบสถาปัตยกรรม Dynamic Matrix Machine เพื่อเพิ่มประสิทธิภาพการประมวลผลบนคลาวด์คลัสเตอร์ (Multicore Clusters) รองรับ Data-intensive Application ขนาดใหญ่ได้อย่างยืดหยุ่น
          </p>
          <span className="text-indigo-400 text-sm font-semibold mt-auto flex items-center gap-2">
            Read Publication on arxiv <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </div>

        {/* Blog 2: Parallel Execution */}
        <div 
          onClick={() => window.open('https://www.researchgate.net/publication/345733666_JParEnt_Parallel_entropy_decoding_for_JPEG_decompression_on_heterogeneous_multicore_architectures', '_blank')}
          className="bg-linear-to-br from-white/5 to-white/2 p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 hover:from-white/8 hover:to-white/5 transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4">Parallel Execution</span>
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors pr-8">
            JParEnt: ทลายขีดจำกัดด้วย Parallel Processing
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
            การถอดรหัสข้อมูลแบบขนาน (Parallel Entropy Decoding) บนสถาปัตยกรรมมัลติคอร์ เพื่อลดความซับซ้อนและหั่นเวลาตอบสนอง (Response Time) ในระบบประมวลผลประสิทธิภาพสูง
          </p>
          <span className="text-emerald-400 text-sm font-semibold mt-auto flex items-center gap-2">
            Read Publication on ResearchGate <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </div>

      </div>

      {/* Full Academic Publications List */}
      <div className="bg-[#0a0a0a] p-10 rounded-3xl border border-white/10 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-white">Full Academic Publications</h2>
        <div className="grid gap-6">
          
          {/* Paper 1: Kronecker Algebra */}
          <div 
            onClick={() => window.open('https://www.researchgate.net/publication/318802826_Lazy_Parallel_Kronecker_Algebra-Operations_on_Heterogeneous_Multicores?_sg=5m-T8Yv1q4biBTAwJnTVIoQCqiXLC2ymv1U48DCVRtDAc3QfxKvKz4ABePmtAxI3WN7c1Ysr4lqrEkc&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6Il9kaXJlY3QifX0', '_blank')}
            className="border-l-2 border-indigo-500/30 pl-6 py-4 hover:border-indigo-500 hover:bg-white/2 transition-all group cursor-pointer"
          >
            <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
              Lazy Parallel Kronecker Algebra-Operations on Heterogeneous Multicores
            </h4>
            <p className="text-gray-500 text-sm mt-1">
              การประมวลผลทางคณิตศาสตร์ขั้นสูงแบบขนานบนระบบ Heterogeneous Multicores (ตีพิมพ์ใน Euro-Par Conference)
            </p>
            <span className="text-[10px] text-indigo-400 font-mono mt-3 inline-block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              &rarr; View Research Paper on ResearchGate
            </span>
          </div>

          {/* Paper 2: Dynamic Partitioning */}
          <div 
            onClick={() => window.open('https://www.researchgate.net/publication/290868422_Design_implementation_and_evaluation_of_a_task-parallel_JPEG_decoder_for_the_Libjpeg-turbo_library?_sg=GKzflWNS0ziznlFwJFmg70O6hoLl-epM1xPSSkYxvHVHoPx_b_acdM31NV6LR1-tgR0eFX9HYdvCanA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6Il9kaXJlY3QifX0', '_blank')}
            className="border-l-2 border-emerald-500/30 pl-6 py-4 hover:border-emerald-500 hover:bg-white/2 transition-all group cursor-pointer"
          >
            <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
              Dynamic Partitioning-based JPEG Decompression on Heterogeneous Multicores
            </h4>
            <p className="text-gray-500 text-sm mt-1">
              อัลกอริทึมการแบ่งงานแบบไดนามิกเพื่อรีดประสิทธิภาพการถอดรหัสรูปภาพบนระบบคอมพิวเตอร์ประสิทธิภาพสูง
            </p>
            <span className="text-[10px] text-emerald-400 font-mono mt-3 inline-block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              &rarr; View Research Paper on ResearchGate
            </span>
          </div>

          {/* Paper 3: SPARK */}
          <div 
            onClick={() => window.open('https://www.researchgate.net/publication/320867297_SPARK_Static_Program_Analysis_Reasoning_and_Retrieving_Knowledge?_sg=pblZfm572LnM931mJTpKmYnoYcP44TGqmmQzNkk8V0YU-ISvvoUo2jPtrYAx3OqnaIJV3V9hQNjv4oE&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6Il9kaXJlY3QifX0', '_blank')}
            className="border-l-2 border-blue-500/30 pl-6 py-4 hover:border-blue-500 hover:bg-white/2 transition-all group cursor-pointer"
          >
            <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
              SPARK: Static Program Analysis Reasoning and Retrieving Knowledge
            </h4>
            <p className="text-gray-500 text-sm mt-1">
              งานวิจัยด้านความปลอดภัยซอฟต์แวร์ (Software Security) และการวิเคราะห์ช่องโหว่ของโปรแกรมผ่านกลไก Static Analysis
            </p>
            <span className="text-[10px] text-blue-400 font-mono mt-3 inline-block opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              &rarr; View Research Paper on ResearchGate
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}