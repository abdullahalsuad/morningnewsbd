import localFont from "next/font/local";

import "../globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const SolaimanLipi = localFont({
  src: "../../public/fonts/SolaimanLipi_Bold.ttf",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "সংবাদ ৭১ বিডি",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="bn" className={SolaimanLipi.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
