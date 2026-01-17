"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { dashboardItems } from "@/constants/dashboardItems";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    redirect("/api/auth/signin");
  }

  const SidebarContent = () => (
    <>
      <div className="p-8 border-b border-base-300 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black italic">
          Fresh<span className="text-primary">Up</span>
        </Link>
        <button className="lg:hidden text-gray-500" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes size={20} />
        </button>
      </div>

      <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
        {dashboardItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-base-300 bg-base-200/50 mt-auto">
        <div className="flex items-center gap-3">
          {session?.user?.image ? (
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <Image src={session.user.image} alt="profile" fill className="object-cover" unoptimized />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {session?.user?.name?.charAt(0) || "U"}
            </div>
          )}
          <div className="overflow-hidden">
            <p className="text-xs font-black text-base-content truncate">{session?.user?.name}</p>
            <p className="text-[10px] text-primary font-bold truncate">{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-base-200">
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300 h-screen sticky top-0">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm" 
            onClick={() => setIsSidebarOpen(false)}
          >
            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-64 bg-base-100 h-full flex flex-col shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <SidebarContent />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden bg-base-100 p-4 shadow-md flex items-center justify-between sticky top-0 z-30">
          <Link href="/" className="text-xl font-black italic">
            Fresh<span className="text-primary">Up</span>
          </Link>
          <button className="btn btn-ghost btn-square text-primary shadow-inner" onClick={() => setIsSidebarOpen(true)}>
            <FaBars size={24} />
          </button>
        </header>

        <div className="p-6 lg:p-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}