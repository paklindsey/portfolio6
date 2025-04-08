"use client";

import "./styles/home.scss";
import Hero from "./components/Hero";
import ILike from "./components/ILike";
import HomeEnding from "./components/HomeEnding";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <ILike />
      <HomeEnding />
    </div>
  );
}
