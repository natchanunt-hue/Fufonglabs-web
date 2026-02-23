"use client";

import { useEffect, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, User, signOut } from "firebase/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ตรวจสอบสถานะการล็อกอิน
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // 1. ระหว่างโหลดเช็คสถานะ (คืนค่าเป็นหน้าจอสีดำว่างๆ ป้องกันการกระพริบ)
  if (loading) {
    return <div className="min-h-screen bg-[#050505]"></div>; 
  }

  // 2. ถ้ายังไม่ล็อกอิน (แสดงแค่กล่อง Login ไม่มี Nav/Footer)
  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-4">
        <div className="bg-[#111] p-10 rounded-3xl border border-white/10 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2">Internal Draft Preview</h1>
          <p className="text-gray-400 text-sm mb-8">กรุณาเข้าสู่ระบบด้วยอีเมล @fufonglabs.com</p>
          <button 
            onClick={handleLogin}
            className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </main>
    );
  }

  // 3. ถ้าล็อกอินแล้ว แต่อีเมล "ไม่ได้" ลงท้ายด้วย @fufonglabs.com (ไม่มี Nav/Footer)
  if (!user.email?.toLowerCase().endsWith("@fufonglabs.com")) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-4">
        <div className="bg-[#111] p-10 rounded-3xl border border-red-500/30 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-500 mb-2">Access Denied</h1>
          <p className="text-gray-400 text-sm mb-8">
            อีเมล <strong className="text-white">{user.email}</strong> ไม่มีสิทธิ์เข้าถึงเนื้อหาส่วนนี้
          </p>
          <button 
            onClick={handleLogout}
            className="w-full bg-red-600/20 text-red-400 font-bold py-3 rounded-full hover:bg-red-600/40 transition-colors border border-red-500/50"
          >
            Sign Out & Try Again
          </button>
        </div>
      </main>
    );
  }

  // 4. ถ้าผ่านทุกเงื่อนไข (ประกอบร่าง Navbar + เนื้อหาข้างใน + Footer)
  return (
    <>
      <Navbar />
      <main className="grow w-full max-w-6xl mx-auto px-6 md:px-16 pt-47 pb-20 flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}