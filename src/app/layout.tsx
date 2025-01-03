import type { Metadata } from "next";
import { CookiesProvider } from 'next-client-cookies/server';
import RQProvider from './_test/RQProvider';
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RQProvider>
        <CookiesProvider>
        {children}
        </CookiesProvider>
        </RQProvider>
      </body>
    </html>
  );
}
