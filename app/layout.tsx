import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "./metadata";
import { SiteNav } from "@/components/site-nav";
import Footer from "@/components/footer";
import { ChakraProviderWrapper } from "@/components/chakra-provider";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,  
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ChakraProviderWrapper>
          <SiteNav />
          {children}
          <Footer />
          </ChakraProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
