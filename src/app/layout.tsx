import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/ui/sidebar"
import Header from "@/components/ui/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YouTube Clone",
  description: "A YouTube clone built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex h-full pt-14">
          <Sidebar />
          <main className="flex-1 ml-60">
            {children}
          </main>
        </div>
        <div className="min-h-screen bg-background">
          <Sidebar />
          <main className="pl-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}