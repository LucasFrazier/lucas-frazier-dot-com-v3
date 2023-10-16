import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "lucasfrazier.com",
  description: "Portfolio and more for Lucas Frazier",
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
