"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { easeInOut, motion } from "motion/react";
// import Lottie from "react-lottie";
// import orb1 from "../../public/images/orb1.json";
// import Lottie from "@lottielab/lottie-player/react";
import orb1 from "/public/images/orb1.svg";

import "./styles/home.scss";

const orb1Options = {
  loop: true,
  autoplay: true,
  animationData: orb1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <div className="home">
      <div className="home__orbs">
        <div className="home__orbs__orb1">
          <motion.img
            initial={{ scale: 0.6 }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src="/images/orb1.svg"
            alt="orange gradient orb"
          />
        </div>
        <div className="home__orbs__orb2">
          <motion.img
            initial={{ scale: 0.6, rotate: 180 }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
            src="/images/orb1.svg"
            alt="orange gradient orb"
          />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.8, x: "-50%", y: "-50%" }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="home__hero"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        >
          Hello, I'm Lindsey
        </motion.h1>
      </motion.div>
    </div>
  );
}
