"use client";

import DownArrow from "../../../public/icons/down-arrow";
import Date from "../../../public/icons/date";
import styles from "./cta.module.css";
import { useState } from "react";
import CtaModal from "./ctaModal";

const CTA = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className={styles.ctaWrapper}>
        <div className={styles.flexIcon}>
          Room
          <DownArrow color="#106A64" />
        </div>
        <div className={styles.ctaDate}>
          <div className={styles.flexIcon}>
            <Date />
            Check in
          </div>
          <div className={styles.flexIcon}>
            <Date />
            Check out
          </div>
        </div>
        <div className={styles.ctaButton} onClick={() => setIsShown(true)}>
          Check availability
        </div>
      </div>
      {isShown && <CtaModal onClose={() => setIsShown(false)} />}
    </>
  );
};

export default CTA;
