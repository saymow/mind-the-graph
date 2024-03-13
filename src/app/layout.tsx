import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Mind the Graph",
  description: "Mind the Graph",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
