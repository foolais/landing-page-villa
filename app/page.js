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
        <div className={styles.headingWrapper}>
          <h1 className={styles.headingTitle}>
            Make your comfort is our happiness
          </h1>
          <p className={styles.headingSubtitle}>
            Studio villa made of bamboo, located near the top of Mount Geulis
            with a stunning 180 degree bird&apos;s eye view.
          </p>
          <div className={styles.headingMainButton}>Book Now</div>
          <div className={styles.headingSecondaryButton}>Explore Rooms</div>
        </div>
      </div>
    </main>
  );
}
