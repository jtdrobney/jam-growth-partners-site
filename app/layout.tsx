import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAM Growth Partners | Employer Cost Strategy, Benefits, Payroll & Private Equity Solutions",
  description:
    "JAM Growth Partners helps employers, brokers, advisors, and private equity-backed companies improve healthcare strategy, benefits, payroll efficiency, workforce cost optimization, and partnership growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
