"use client";

import "../styles/home.scss";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const ILike = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset: ["end end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.2], ["50%", "0%"]);
  const xText1 = useTransform(
    scrollYProgress,
    [0.75, 0.85, 1],
    ["30%", "-50%", "-90%"]
  );

  return (
    <div className="iLike" ref={containerRef}>
      <div className="iLike__text">
        <motion.img src="/images/iLikeTo.svg" style={{ x }} />
      </div>
      <div className="iLike__orange">
        <img src="/images/orangePaper.png" />
      </div>
      <div className="iLike__smallText">
        <motion.div className="iLike__smallText__wrapper">
          <h6>design meaningful things</h6>
          <h6>develop useful products</h6>
          <h6>and have a lot of fun doing it</h6>
        </motion.div>
      </div>
    </div>
  );
};

export default ILike;
