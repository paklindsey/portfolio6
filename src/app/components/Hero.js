import "../styles/home.scss";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="hero__textBox"
      >
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="hero__textBox__left"
        >
          <img src="/images/Hello.png" className="helloPng" />
        </motion.div>
        <div className="hero__textBox__right">
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <h6>im lindsey</h6>
          </motion.div>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <p>welcome to my little slice of life on the web</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
