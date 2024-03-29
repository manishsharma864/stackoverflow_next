import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import ThemeProvider from '@/context/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'] ,
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'] ,
  weight:['300','400','500','600','700'],
  variable:'--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'DEVFLOW',
  description: 'A community driven website for asking and answering question',
  icons:'/assets/images/site-logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500'
      }
    }}>
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
       </body>
    </html>
    </ClerkProvider>
  )
}
