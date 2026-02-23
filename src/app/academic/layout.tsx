import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Research",
};

export default function AcademicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}