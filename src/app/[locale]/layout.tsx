import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InsifyTech",
  description: "The company's mission is to provide professional and simplified website development services",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const classes = [
    inter.className,
    'bg-stone-100',
    'dark:bg-slate-900',
  ].join(' ');

  return (
    <html lang={locale}>
      <body className={classes}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
