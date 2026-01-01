import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "../public/hero.jpg";
import Header from "./components/header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <Image
          src={HeroImage}
          alt="Hero"
          fill
          priority
          className={styles.heroImage}
        />
        <Header />
        <div>
          <h1 className={styles.headingTitle}>
            Make your comfort is our happiness
          </h1>
        </div>
      </div>
    </main>
  );
}
