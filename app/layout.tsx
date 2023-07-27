import './globals.css'
import type {GetStaticProps, Metadata, NextPage} from 'next'
import {Inter} from 'next/font/google'
import RootStore, {initializeStore} from "@stores/rootStore";
import {NextAuthProvider, StoreProvider} from "@app/providers";
import {Provider} from "mobx-react";
import RefreshToken from "@components/RefreshToken";
import ThemeProvider from "../theme";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
   children}: {
    children: React.ReactNode,
}) {

    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <StoreProvider>
                        <NextAuthProvider>
                            <RefreshToken/>
                            {children}
                        </NextAuthProvider>
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
