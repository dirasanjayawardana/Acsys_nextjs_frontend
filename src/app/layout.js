import { Inter } from "next/font/google";
import "./globals.css";
import { ContexProvider } from "@/contexts/ContexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ACSYS",
    description: "Admin Control System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <ContexProvider>{children}</ContexProvider>
            </body>
        </html>
    );
}
