import Image from "next/image";
import styles from "./page.module.scss";
import { Greet } from "./components/greet";
import { Counter } from "./components/counter";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
    </div>
  );
}
