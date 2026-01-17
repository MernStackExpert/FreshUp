"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaUserCircle, FaEnvelope, FaIdBadge, FaShieldAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-base-100 rounded-[3rem] p-8 lg:p-14 shadow-xl border border-base-300 overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          {/* Profile Image with Dynamic Source */}
          <div className="relative">
            <div className="w-44 h-44 rounded-[3rem] overflow-hidden border-4 border-primary shadow-2xl">
              <Image
                src={session?.user?.image || "https://i.ibb.co/vHZj9n9/default-avatar.png"}
                alt={session?.user?.name || "User"}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-success text-white p-3 rounded-2xl shadow-lg border-4 border-base-100">
              <FaShieldAlt />
            </div>
          </div>

          {/* User Basic Info Section */}
          <div className="text-center md:text-left space-y-4">
            <div className="inline-block px-5 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em]">
              Verified Account
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-base-content tracking-tight uppercase leading-none">
              {session?.user?.name}
            </h1>
            <p className="text-gray-400 font-bold flex items-center justify-center md:justify-start gap-3 text-lg">
              <FaEnvelope className="text-primary" /> {session?.user?.email}
            </p>
          </div>
        </div>

        {/* Dynamic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Full Name Card */}
          <div className="bg-base-200/50 p-7 rounded-[2.5rem] border border-base-300 flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-primary text-2xl">
              <FaIdBadge />
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Registered Name</p>
              <h3 className="font-black text-base-content text-xl">{session?.user?.name}</h3>
            </div>
          </div>

          {/* Email Address Card */}
          <div className="bg-base-200/50 p-7 rounded-[2.5rem] border border-base-300 flex items-center gap-6 overflow-hidden">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-primary text-2xl">
              <FaEnvelope />
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Primary Email</p>
              <h3 className="font-black text-base-content text-lg truncate">{session?.user?.email}</h3>
            </div>
          </div>

          {/* Designation Card */}
          <div className="bg-base-200/50 p-7 rounded-[2.5rem] border border-base-300 flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-primary text-2xl">
              <FaBriefcase />
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Professional Role</p>
              <h3 className="font-black text-base-content text-xl uppercase tracking-tighter">User Stand</h3>
            </div>
          </div>

          {/* Identity Status Card */}
          <div className="bg-base-200/50 p-7 rounded-[2.5rem] border border-base-300 flex items-center gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm text-success text-2xl">
              <FaShieldAlt />
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Verification Status</p>
              <h3 className="font-black text-success text-xl uppercase tracking-widest">Active</h3>
            </div>
          </div>
        </div>

        {/* Footer Meta Info */}
        <div className="mt-12 pt-8 border-t border-base-300 flex items-center justify-center md:justify-start gap-4 text-gray-400 font-black uppercase text-[10px] tracking-[0.3em]">
            <FaCalendarAlt className="text-primary text-sm" /> 
            <span>System Logged: {new Date().toLocaleDateString('en-GB')}</span>
        </div>
      </div>
    </div>
  );
}