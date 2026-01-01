import Image from "next/image";
import styles from "./gallery.module.css";
import Gallery1 from "../../../public/gallery-1.jpg";
import Gallery2 from "../../../public/gallery-2.jpg";
import Gallery3 from "../../../public/gallery-3.jpg";

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} />
      <div className={styles.contentWrapper}>
        <h2 style={{ textAlign: "center" }}>
          Our <span>Gallery</span>
        </h2>
        <div className={styles.galleryWrapper}>
          <div className={styles.leftImages}>
            <Image src={Gallery1} alt="LeftImages" fill />
          </div>
          <div>
            <div className={styles.rightImages}>
              <Image src={Gallery2} alt="rightImages1" fill />
            </div>
            <div className={styles.rightImages}>
              <Image src={Gallery3} alt="rightImages2" fill />
              <span>More Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
