"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { dashboardItems } from "@/constants/dashboardItems";
import Image from "next/image";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();

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

  return (
    <div className="flex min-h-screen bg-base-200">
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300 h-screen sticky top-0">
        <div className="p-8 border-b border-base-300">
          <Link href="/" className="text-2xl font-black italic">
            Fresh<span className="text-primary">Up</span> Dashboard
          </Link>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {dashboardItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
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
                  <Image 
                    src={session.user.image} 
                    alt="profile" 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {session?.user?.name?.charAt(0) || "U"}
                </div>
              )}
              <div className="overflow-hidden">
                <p className="text-xs font-black text-base-content truncate">
                  {session?.user?.name}
                </p>
                <p className="text-[10px] text-primary font-bold truncate">
                  {session?.user?.email}
                </p>
              </div>
           </div>
        </div>
      </aside>

      <main className="flex-1 p-6 lg:p-12">
        <div className="max-w-6xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}