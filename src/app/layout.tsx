import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitGoals",
  description: "Track your fitness goals and workout progress",
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
