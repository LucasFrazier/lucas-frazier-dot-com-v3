import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lucasfrazier.com",
  description: "Portfolio and more for Lucas Frazier",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto bg-dark`}>
        <header className="sticky z-10 top-0 h-14 flex items-center justify-between border-b-2 border-light bg-dark w-full px-5 lg:px-10 shadow-md">
          <Link
            href="/"
            className="text-blue text-xl font-medium hover:text-green focus:text-green"
          >
            lucasfrazier.com
          </Link>
          <div className="flex items-center gap-5 text-sm text-light underline-offset-2">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline focus:underline hover:text-green focus:text-green text-base"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-14 px-5 lg:px-10 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
