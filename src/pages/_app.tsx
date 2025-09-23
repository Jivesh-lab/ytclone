import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-40 h-14 bg-white border-b">
        <Header />
      </div>

      {/* Fixed sidebar under header - dark theme */}
      <div className="fixed top-14 left-0 bottom-0 z-30 w-60">
        <Sidebar />
      </div>

      {/* Main content area with offsets */}
      <main className="pt-14 ml-60">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
