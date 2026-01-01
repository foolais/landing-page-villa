"use client";

import { createPortal } from "react-dom";
import styles from "./ctaModal.module.css";

const CtaModal = ({
  onClose,
  status = "available",
  room = "Studio Bamboo",
  startDate = "12 Aug 2023",
  endDate = "15 Aug 2023",
}) => {
  return createPortal(
    <div className={styles.ctaOverlay} onClick={onClose}>
      <div className={styles.ctaModal}>
        <h3 className={styles.ctaModalTitle}>
          {status ? "Available" : "Not Available"}
        </h3>
        <div className={styles.ctaModalText}>
          <span>
            {room} on {startDate} until {endDate} is{" "}
            {status ? "Available" : "Not Available"}.
          </span>
        </div>
        <div className={styles.ctaModalClose} onClick={onClose}>
          Close
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CtaModal;
