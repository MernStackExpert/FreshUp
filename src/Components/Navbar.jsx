"use client"
import { useState } from "react";
import { FaDashcube, FaSearch, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Groceries", href: "/allgroceries" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/allgroceries?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-16">
        
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`transition-colors ${isActive ? "text-primary font-bold" : "hover:text-primary"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <Link href="/" className="text-2xl font-black flex items-center gap-1 tracking-tighter cursor-pointer">
            <span className="text-primary italic">Fresh</span>Up
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-4">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`transition-colors px-2 py-1 rounded ${isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative group">
            <input 
              type="text" 
              placeholder="Search groceries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-sm input-bordered rounded-full w-40 focus:w-60 transition-all duration-300 pl-8 focus:outline-primary" 
            />
            <button type="submit" className="absolute left-3 text-gray-400 text-xs hover:text-primary transition-colors">
              <FaSearch />
            </button>
          </form>

          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary shadow-sm">
                <div className="w-9 rounded-full">
                  <Image 
                    src={session.user?.image || "https://i.pravatar.cc/150?u=fallback"} 
                    alt="User Profile" 
                    width={36} 
                    height={36} 
                    className="rounded-full" 
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-64 p-4 shadow-2xl border border-base-200 font-medium space-y-2">
                <li className="mb-2 border-b border-base-200 pb-2">
                  <div className="flex flex-col items-start gap-0 cursor-default hover:bg-transparent">
                    <p className="text-base font-black text-base-content">{session.user?.name}</p>
                    <p className="text-xs text-gray-400 break-all">{session.user?.email}</p>
                  </div>
                </li>
                <li><Link href="/dashboard" className="py-3 flex items-center gap-2"><FaDashcube className="text-primary" /> Dashboard</Link></li>
                <li>
                  <button 
                    onClick={() => signOut()} 
                    className="py-3 text-error flex items-center gap-2 hover:bg-error/10"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-8 shadow-lg shadow-primary/20">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}