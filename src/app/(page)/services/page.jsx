"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTruck, FaLeaf, FaCreditCard, FaHeadset, FaUndo, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Express Delivery",
    desc: "Get your groceries at your doorstep within 30 minutes. We ensure the fastest delivery in Rajshahi city.",
    color: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "100% Organic Sourcing",
    desc: "Every vegetable and fruit is sourced directly from certified organic farms to ensure the best health for your family.",
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    id: 3,
    icon: <FaCreditCard />,
    title: "Secure Payments",
    desc: "We support all major payment methods including BKash, Nagad, and Credit Cards with 100% encrypted security.",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to help you with your orders and any queries you may have.",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    id: 5,
    icon: <FaUndo />,
    title: "Easy Returns",
    desc: "Not satisfied with the quality? We offer a no-questions-asked instant return and refund policy on fresh items.",
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    id: 6,
    icon: <FaShieldAlt />,
    title: "Quality Inspection",
    desc: "Our products pass through a 5-step quality check before packaging to ensure you get only the finest items.",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  }
];

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-base-100 max-w-7xl mx-auto">
      {/* 1. Hero Section */}
      <section className="relative py-24 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Commitment</span>
            <h1 className="text-5xl md:text-7xl font-black text-base-content leading-tight">
              Premium <span className="text-primary">Services</span> <br /> For Your Family
            </h1>
            <p className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto">
              We focus on quality, speed, and safety to make your daily grocery shopping experience smooth and reliable.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className={`group p-10 rounded-[3rem] ${service.color} border border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-3xl shadow-sm mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className={service.iconColor + " group-hover:text-white transition-colors"}>
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-medium">
                  {service.desc}
                </p>

                <div className="mt-8 w-12 h-1 bg-primary rounded-full opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA Section for Services */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="bg-primary p-12 md:p-20 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Experience the <span className="text-black/20">FreshUp</span> <br /> Difference Today!
              </h2>
              <p className="text-xl opacity-90 max-w-xl mx-auto">
                Join thousands of happy customers in Rajshahi and get your first delivery for free!
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link href={"/groceries"} className="btn btn-lg btn-neutral rounded-2xl px-12 h-16 shadow-xl">Start Shopping</Link>
                <Link href={"/contact"} className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-black rounded-2xl px-12 h-16">Contact Support</Link>
              </div>
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          </div>
        </div>
      </section>
    </main>
    
  );
}