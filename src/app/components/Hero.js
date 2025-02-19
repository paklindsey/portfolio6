import "../styles/home.scss";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__textBox">
        <div className="hero__textBox__left">
        <img src="/images/Hello.png" className="helloPng"/>
        </div>
        <div className="hero__textBox__right">
          <div><h6>im lindsey</h6></div>
          <div><p>welcome to my little slice of life on the web</p></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
