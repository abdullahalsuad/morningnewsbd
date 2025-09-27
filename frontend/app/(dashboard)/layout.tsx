import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { dbConnect } from "@/service/mongo";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function Dashboard({ children }: DashboardLayoutProps) {
  const session = await auth();

  await dbConnect();

  if (!session) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <DashboardLayout>{children}</DashboardLayout>
          <Toaster position="top-right" expand={false} richColors />
        </SessionProvider>
      </body>
    </html>
  );
}
