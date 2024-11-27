import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo - Your Gateway to Multilingualism",
  description: "Your Gateway to Multilingualism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
    <head>
          <link rel="icon" href="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body className={font.className}>
        <Toaster /> 
        <HeartsModal />
        <ExitModal />
        <PracticeModal />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
