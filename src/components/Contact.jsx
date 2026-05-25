import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion"; // 🛠️ Imported textVariant for uniform header animations

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faEnvelope, 
  faMapMarkerAlt, 
  faMessage, 
  faCheckCircle, 
  faExclamationTriangle 
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedin, 
  faGithub, 
  faWhatsapp, 
  faInstagram, 
  faTelegram, 
  faDiscord 
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, text: "" });

  useEffect(() => {
    if (status.type) {
      const timer = setTimeout(() => setStatus({ type: null, text: "" }), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Momen Ayman",
          from_email: form.email,
          to_email: "momen.saif959@gmail.com",
          location: form.location,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            text: "Message received successfully! I will get back to you shortly.",
          });

          setForm({
            name: "",
            email: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({
            type: "error",
            text: "Transmission failed. Please check your network or reach out via socials.",
          });
        }
      );
  };

  return (
    // 🛠️ Wrapped inside a fragment to isolate header layout flow safely
    <>
      {/* 🛠️ NEW: Extracted Independent Section Header Block */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      {/* Main content grid setup */}
      <div className={`mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
        {/* Form container */}
        <motion.div 
          variants={slideIn("left", "tween", 0.2, 1)} // 🛠️ Swapped "up" to "left" so it glides side-by-side cleanly with the Earth model
          className='flex-[0.75] p-8 rounded-2xl border border-slate-800/50 relative'
          style={{ backgroundColor: "#021136" }}
        >
          {/* 🛠️ Animated notification message layout wrapper (Now shifted to form body head) */}
          <AnimatePresence>
            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className={`p-4 rounded-xl flex items-center gap-3 border text-[15px] font-medium mb-6 ${
                  status.type === "success" 
                    ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-400" 
                    : "bg-rose-950/40 border-rose-500/50 text-rose-400"
                }`}
              >
                <FontAwesomeIcon icon={status.type === "success" ? faCheckCircle : faExclamationTriangle} />
                <span>{status.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>
                <FontAwesomeIcon icon={faUser} className="mr-2" style={{ color: "#FFFFFF" }} /> Your Name
              </span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='bg-[#01091e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-800/60 font-medium focus:border-white transition-colors'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{ color: "#FFFFFF" }} /> Your Email
              </span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className='bg-[#01091e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-800/60 font-medium focus:border-white transition-colors'
                required
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" style={{ color: "#FFFFFF" }} /> Location
              </span>
              <input
                type='text'
                name='location'
                value={form.location}
                onChange={handleChange}
                placeholder="e.g., Cairo, Egypt"
                className='bg-[#01091e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-800/60 font-medium focus:border-white transition-colors'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>
                <FontAwesomeIcon icon={faMessage} className="mr-2" style={{ color: "#FFFFFF" }} /> Message
              </span>
              <textarea
                rows={4}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to build together?"
                className='bg-[#01091e] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-slate-800/60 font-medium focus:border-white transition-colors resize-none'
                required
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300 ${
                loading 
                  ? "bg-slate-800/50 border border-slate-700 text-slate-400 cursor-not-allowed" 
                  : "bg-[#01091e] border border-slate-700 hover:border-white shadow-primary hover:scale-105 cursor-pointer"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* --- Other Ways to Contact Section --- */}
          <div className="mt-10 pt-8 border-t border-slate-800/60">
            <h4 className="text-white font-semibold text-[18px] mb-4">Other ways to connect</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/201016432911" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-[#25D366] hover:border-[#25D366] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </a>
              <a 
                href="https://t.me/IsaaacSP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-[#26A5E4] hover:border-[#26A5E4] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTelegram} /> Telegram
              </a>
              <a 
                href="https://discord.com/users/630817100163973162" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-[#5865F2] hover:border-[#5865F2] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faDiscord} /> Discord
              </a>
              <a 
                href="https://linkedin.com/in/momen-saif-909333331/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a 
                href="https://github.com/Momen959" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:border-white transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a 
                href="https://www.instagram.com/momensaif352/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#01091e] border border-slate-800 px-4 py-2 rounded-lg text-slate-300 hover:text-[#E1306C] hover:border-[#E1306C] transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* HARD CLAMP SYSTEM: Strictly enforcing overflow bounds and absolute heights */}
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)} 
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow-hidden relative max-w-full'
        >
          <div className="w-full h-full max-h-full max-w-full absolute inset-0 overflow-hidden flex items-center justify-center">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");