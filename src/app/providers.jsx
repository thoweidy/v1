'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Providers({ children }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="system">
                <Header />
                {children}
                <Footer />
            </NextThemesProvider>
        </NextUIProvider>
    );
}