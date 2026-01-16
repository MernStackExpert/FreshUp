"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLeaf, FaHandshake, FaBullseye, FaAward, FaUsers, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-base-100">
      {/* 1. Header Section */}
      <section className="relative py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Journey</span>
            <h1 className="text-5xl md:text-7xl font-black text-base-content mt-4 mb-8">
              The Story of <span className="text-primary">FreshUp</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
              Started in 2016, FreshUp has been on a mission to redefine the grocery shopping experience by connecting local organic farms directly to your doorstep.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </section>

      {/* 2. Vision & Mission (Unique Grid) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="bg-base-200 p-12 rounded-[3rem] relative overflow-hidden group">
              <FaBullseye className="text-6xl text-primary/20 absolute -top-4 -right-4" />
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                <FaBullseye />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To provide accessible, high-quality organic groceries while supporting local farmers and promoting sustainable living in every household.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-primary text-primary-content p-12 rounded-[3rem] relative overflow-hidden group">
              <FaLeaf className="text-6xl text-white/10 absolute -top-4 -right-4" />
              <div className="w-16 h-16 bg-white flex items-center justify-center text-primary text-3xl mb-6 rounded-2xl">
                <FaLeaf />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 text-lg leading-relaxed">
                Becoming the world's most trusted partner for healthy living by ensuring every kitchen is filled with nature's purest ingredients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats & Impact */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaUsers />, label: "Happy Shoppers", value: "50k+" },
              { icon: <FaAward />, label: "Quality Awards", value: "15+" },
              { icon: <FaHandshake />, label: "Local Farmers", value: "200+" },
              { icon: <FaLeaf />, label: "Organic Items", value: "1.2k+" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <div className="text-3xl text-primary flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-black text-base-content">{stat.value}</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team/Culture Banner */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-base-200">
                <Image 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                  alt="Our Culture"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-black leading-tight">We are more than just a grocery store.</h2>
              <p className="text-gray-500 text-lg">
                Behind every FreshUp delivery is a team of dedicated professionals and local farmers working 24/7 to ensure your family gets the best nature has to offer. We believe in transparency, quality, and community.
              </p>
              <button className="btn btn-primary btn-lg rounded-full px-10 group">
                Join Our Community <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}