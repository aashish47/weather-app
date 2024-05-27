import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
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
                <div className="h-screen">
                    <Navbar />
                    <div className="h-12" />
                    <Drawer>{children}</Drawer>
                </div>
            </body>
        </html>
    );
}
