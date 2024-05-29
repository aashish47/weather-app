import Drawer from "@/components/drawer/Drawer";
import Navbar from "@/components/navbar/main/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Weather",
    description: "Weather Application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className="h-12" />
                <Drawer>{children}</Drawer>
            </body>
        </html>
    );
}
