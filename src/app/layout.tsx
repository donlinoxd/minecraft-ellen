import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import './globals.css'

const myFont = localFont({
    src: './fonts/ArcadeGamer-Regular.woff2',
})

export const metadata: Metadata = {
    title: 'Minecraft',
    description: 'Minecraft by Group 2',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={`${myFont.className} h-full antialiased`}>
            <body className='min-h-full flex flex-col' style={myFont.style}>
                <div className='relative w-screen h-screen'>
                    <Image src='/images/bg.webp' alt='background' fill className='-z-10 absolute top-0 left-0 w-full h-full' />
                    {children}
                </div>
            </body>
        </html>
    )
}
