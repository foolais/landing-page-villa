import Image from "next/image";
import styles from "./footer.module.css";
import FooterImages from "../../../public/footer.jpg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={FooterImages} alt="footer" fill />
      <div>
        <h2>Make your comfort is our happiness</h2>
        <div>Book Now</div>
      </div>
    </div>
  );
};

export default Footer;
