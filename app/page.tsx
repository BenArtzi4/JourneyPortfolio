"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
