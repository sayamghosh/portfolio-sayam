import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayam Ghosh",
  description: "Portfolio of Sayam Ghosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#161513]` }
      >
        {children}
      </body>
    </html>
  );
}
