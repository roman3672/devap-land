import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevAp Agency | Создаем современные цифровые решения",
  description: "Профессиональная веб-разработка, UI/UX дизайн и SEO-оптимизация для вашего бизнеса. Создаем цифровые решения, которые двигают бизнес вперед.",
  keywords: "веб-разработка, дизайн сайтов, SEO, UI/UX, интернет-магазины, мобильные приложения, цифровые решения",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
