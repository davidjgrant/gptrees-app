import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { getServerAuthSession } from "@/server/auth";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "GPTrees App",
  description: "Scan Trees with AI. Get Quick Results. Save the Planet.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} container h-full w-full`}>
        <TRPCReactProvider>
          <Header session={session} />
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
