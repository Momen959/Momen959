import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect, useRef } from "react";
import MeImage from "../assets/me.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedItems = [
    "Team Leader and Researcher",
    "RAG Workflow Specialist",
    "Data Science Student",
    "Deployment Operations Engineer",
    "Backend Developer"
  ];
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const starData = [
    { top: "5%", left: "8%", size: "2px", speed: 0.08 },
    { top: "10%", left: "32%", size: "3px", speed: 0.07 },
    { top: "16%", left: "78%", size: "1px", speed: 0.12 },
    { top: "24%", left: "54%", size: "2px", speed: 0.09 },
    { top: "32%", left: "14%", size: "3px", speed: 0.06 },
    { top: "40%", left: "72%", size: "2px", speed: 0.1 },
    { top: "48%", left: "24%", size: "1px", speed: 0.13 },
    { top: "56%", left: "84%", size: "2px", speed: 0.08 },
    { top: "64%", left: "40%", size: "3px", speed: 0.05 },
    { top: "72%", left: "18%", size: "2px", speed: 0.11 },
    { top: "80%", left: "90%", size: "1px", speed: 0.07 },
    { top: "88%", left: "48%", size: "2px", speed: 0.06 },
    { top: "22%", left: "6%", size: "1px", speed: 0.1 },
    { top: "36%", left: "28%", size: "2px", speed: 0.09 },
    { top: "52%", left: "66%", size: "1px", speed: 0.12 },
    { top: "68%", left: "12%", size: "2px", speed: 0.06 },
    { top: "76%", left: "58%", size: "3px", speed: 0.07 },
    { top: "84%", left: "82%", size: "2px", speed: 0.08 },
    { top: "92%", left: "34%", size: "1px", speed: 0.1 },
    { top: "12%", left: "52%", size: "3px", speed: 0.09 },
    { top: "30%", left: "16%", size: "2px", speed: 0.11 },
    { top: "44%", left: "36%", size: "1px", speed: 0.1 },
    { top: "60%", left: "70%", size: "2px", speed: 0.08 },
    { top: "74%", left: "4%", size: "1px", speed: 0.13 },
    { top: "52%", left: "88%", size: "2px", speed: 0.1 },
    { top: "68%", left: "38%", size: "3px", speed: 0.06 },
    { top: "86%", left: "14%", size: "2px", speed: 0.09 },
    { top: "94%", left: "60%", size: "1px", speed: 0.08 }
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  useEffect(() => {
    let typingInterval;
    if (charIndex < typedItems[itemIndex].length) {
      typingInterval = setInterval(() => {
        setTypedText((prev) => prev + typedItems[itemIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 75);
    } else {
      const timeout = setTimeout(() => {
        setItemIndex((prev) => (prev + 1) % typedItems.length);
        setCharIndex(0);
        setTypedText("");
      }, 1500);
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(typingInterval);
  }, [charIndex, itemIndex]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen mx-auto overflow-hidden bg-transparent"
    >
      {/* --- PARALLAX STARFIELD BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {starData.map((star, index) => {
          const driftX = mousePos.x * star.speed * 0.7;
          const driftY = mousePos.y * star.speed * 0.7;

          return (
            <div
              key={index}
              className="absolute bg-white rounded-full transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(136,247,255,0.9)]"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                transform: `translate(${driftX}px, ${driftY}px)`,
              }}
            />
          );
        })}
      </div>

      {/* --- MAIN HERO WRAPPER --- */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 sm:px-10 lg:px-16 pointer-events-auto">
        <div className="flex w-full max-w-[1400px] flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center">
          
          {/* 🪙 3D COIN FLIP PROFILE FRAME INTERACTION */}
          <div className="relative flex-shrink-0 w-[220px] sm:w-[260px] lg:w-[300px] h-[220px] sm:h-[260px] lg:h-[300px] group [perspective:1000px]">
            <div className="relative w-full h-full duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* --- FRONT SIDE: Your Avatar Image --- */}
              <div className="absolute inset-0 w-full h-full rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.12)] overflow-hidden [backface-visibility:hidden] bg-white/5">
                <img
                  src={MeImage}
                  alt="Momen Ayman"
                  className="w-full h-full rounded-full object-cover scale-105"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md">
                  cosmic engineer
                </div>
              </div>

              {/* --- BACK SIDE: Embedded LinkedIn Link --- */}
              <a 
                href="https://www.linkedin.com/in/momen-saif-909333331/" // Change to your actual profile handle link if different
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 w-full h-full rounded-full border border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md [transform:rotateY(180deg)] [backface-visibility:hidden] group cursor-pointer transition-colors hover:bg-slate-950"
              >
                {/* Clean SVG LinkedIn Vector Asset */}
                <svg 
                  className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.85)]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest mt-3 font-bold transition-colors">
                  Connect
                </span>
              </a>

            </div>
          </div>

          {/* Typography Engine Area */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className={`${styles.heroHeadText} text-white font-black tracking-wide`}>
              Hi, I'm <br /> <span className="bg-gradient-to-r from-[#00F0FF] to-[#E0F7FA] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,240,255,0.3)]">Momen Ayman</span>
            </h1>
            <p className={`${styles.heroSubText} mt-3 text-slate-300 font-medium max-w-2xl leading-relaxed`}>
              I'm a{" "}
              <span className="typed relative inline-block text-[#00F0FF] font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                {typedText}
              </span>
              <span className="text-[#00F0FF] font-light ml-1 animate-pulse">|</span>
              <br />
              <span className="block mt-2 text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                Navigating complex data structures & deployment orbits.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* --- SCROLL NAVIGATOR --- */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-dashed border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.16)] flex justify-center items-start p-2 backdrop-blur-md">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;