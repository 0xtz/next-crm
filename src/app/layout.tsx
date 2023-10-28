import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { GeistSans, GeistMono } from "geist/font";

// font geist
const font = GeistSans({});

export const metadata = {
  title: "next CRM",
  description: "A CRM built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange // this ll prevent the transition on page load
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
