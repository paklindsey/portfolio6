import "../styles/home.scss";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__orbs">
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          src="/images/orb1.svg"
          className="orb1"
        />
        <motion.img
          initial={{ rotate: 100, scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src="/images/orb1.svg"
          className="orb2"
        />
      </div>
      <motion.div
        initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="hero__textbox"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Hello, I'm Lindsey
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Hero;
