"use client"
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-base-100">
      <section className="relative py-20 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-base-content leading-tight">
              We're Here to <span className="text-primary">Help You</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-base-200 group hover:bg-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary text-xl shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 group-hover:text-white">Call Now</p>
                    <p className="text-lg font-bold group-hover:text-white">01908716502</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-base-200 group hover:bg-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary text-xl shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 group-hover:text-white">Email Us</p>
                    <p className="text-lg font-bold group-hover:text-white">mdnirob30k@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-base-200 group hover:bg-primary transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary text-xl shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-60 group-hover:text-white">Location</p>
                    <p className="text-lg font-bold group-hover:text-white">Rajshahi, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-black mb-6">Connect Socially</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/MernStackExpert" target="_blank" className="btn btn-circle btn-lg bg-base-200 border-none hover:bg-black hover:text-white transition-all">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/mdnirobsarkar/" target="_blank" className="btn btn-circle btn-lg bg-base-200 border-none hover:bg-[#0077b5] hover:text-white transition-all">
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-base-100 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-base-200"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                  <label className="label font-bold text-sm">Full Name</label>
                  <input type="text" placeholder="MD NIROB SARKAR" className="input input-lg bg-base-200 border-none rounded-2xl" />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-sm">Email Address</label>
                  <input type="email" placeholder="mdnirob30k@gmail.com" className="input input-lg bg-base-200 border-none rounded-2xl" />
                </div>
                <div className="form-control col-span-1 md:col-span-2">
                  <label className="label font-bold text-sm">Subject</label>
                  <input type="text" placeholder="How can we help?" className="input input-lg bg-base-200 border-none rounded-2xl w-full" />
                </div>
                <div className="form-control col-span-1 md:col-span-2">
                  <label className="label font-bold text-sm">Description</label>
                  <textarea rows="6" placeholder="Write your message here..." className="textarea textarea-lg bg-base-200 border-none rounded-2xl w-full"></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button className="btn btn-primary btn-lg rounded-2xl w-full shadow-xl shadow-primary/20 group h-16">
                    Send Message <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-6">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative border-8 border-base-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.92211933753!2d88.52975971900115!3d24.372251347630737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55aa957%3A0x2f15560ca74a58f4!2sRajshahi!5e0!3m2!1sen!2sbd!4v1711234567890!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}