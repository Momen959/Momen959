import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import heroBg from "../assets/herobg.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedItems = ["Backend Developer", "FastAPI Builder", "Database Engineer", "RAG Engineer"];
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (charIndex < typedItems[itemIndex].length) {
      typingInterval = setInterval(() => {
        setTypedText((prev) => prev + typedItems[itemIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      // pause before moving to next word
      const timeout = setTimeout(() => {
        setItemIndex((prev) => (prev + 1) % typedItems.length);
        setCharIndex(0);
        setTypedText("");
      }, 1000);

      return () => clearTimeout(timeout);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, itemIndex]);

  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden bg-primary bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Momen Ayman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a {" "}
            <span
              className="typed"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(245, 202, 153, 0.5), rgba(245, 202, 153, 0.5))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 8px",
                backgroundPosition: "0 100%",
                color: "#915EFF",
                display: "inline-block",
                fontWeight: "bold"
              }}
            >
              {typedText}
            </span>
            <span className="typed-cursor">|</span>
            <br />
            <b>Python, FastAPI, Node.js, databases, and deployment.</b>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
