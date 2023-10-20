"use client";

import SideBare from "@/components/layout/side-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBare />
      <div className="flex-1">
        {/* Content */}
        <div className="h-full p-6">
          {/* <div className="border-muted-1 h-full rounded-xl border-2" /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
