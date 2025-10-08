import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import {UserProvider} from  "../lib/AuthContext"
export default function App({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <UserProvider>
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-40 h-14 bg-white border-b">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      {/* Mobile sidebar */}
      <Sidebar 
        isMobile={true}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Desktop sidebar */}
      <div className="fixed top-14 left-0 bottom-0 z-30 w-60 hidden lg:block">
        <Sidebar />
      </div>

      {/* Main content area with responsive margins */}
      <main className="pt-14 lg:ml-60">
        <Component {...pageProps} />
      </main>
    </div>
    </UserProvider>
  );
}
