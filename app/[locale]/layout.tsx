import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
    },
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
    const messages = useMessages();
    return (
        <html
            lang={params.locale}
            className={`scroll-smooth ${inter.className}`}
            suppressHydrationWarning
        >
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        <div className="relative flex min-h-screen flex-col">
                            <SiteHeader />
                            <div className="flex-1">{children}</div>
                            <SiteFooter />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
