"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LoginPage() {
  // Requirement onujayi default email and password set kora hoyeche
  const [email, setEmail] = useState("mruser@freshup.com");
  const [password, setPassword] = useState("1234Nn");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, 
    });

    if (res?.error) {
      setError("Invalid Email or Password! Please try again.");
    } else {
      // Login success hole items page a niye jaoa rasm (Requirement onusare)
      window.location.href = "/allgroceries"; 
    }
  };

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-base-100 rounded-[3rem] shadow-2xl overflow-hidden border border-base-300"
      >
        <div className="p-10 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-base-content mb-2">Welcome Back!</h2>
            <p className="text-gray-500 font-medium">Login to your <span className="text-primary font-bold">FreshUp</span> account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label font-bold text-sm">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="input input-lg w-full bg-base-200 border-none rounded-2xl pl-12 focus:ring-2 focus:ring-primary/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-sm">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="input input-lg w-full bg-base-200 border-none rounded-2xl pl-12 focus:ring-2 focus:ring-primary/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            {error && (
              <p className="text-error text-sm font-bold bg-error/10 p-3 rounded-xl text-center">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 group">
              Sign In <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="divider my-8 text-gray-400 text-xs font-bold uppercase tracking-widest">OR</div>

          <button 
            onClick={() => signIn("google", { callbackUrl: "/allgroceries" })}
            className="btn btn-lg btn-outline w-full rounded-2xl border-base-300 hover:bg-base-200 hover:text-base-content gap-3 h-16"
          >
            <FaGoogle className="text-error" /> 
            <span className="font-bold">Continue with Google</span>
          </button>

          <p className="text-center mt-8 text-gray-500 font-medium">
            Test Credentials are pre-filled for your convenience.
          </p>
        </div>
      </motion.div>
    </main>
  );
}