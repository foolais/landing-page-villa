import Image from "next/image";
import styles from "./cardVillaStudio.module.css";
import Bed from "../../../public/icons/bed";
import Person from "../../../public/icons/person";
import { formatRupiah } from "../../utils/utils";

const CardVillaStudio = ({
  image,
  name,
  facilities,
  bed,
  person,
  price,
  isOdd,
}) => {
  return (
    <div
      className={styles.cardVillaStudio}
      style={{ backgroundColor: isOdd ? "#106a64" : "#FFFFFF" }}
    >
      <div className={styles.imageContainer}>
        <Image src={image} alt={name} fill className={styles.villaImage} />
      </div>
      <h3 style={{ color: isOdd ? "#ffffff" : "#106a64" }}>{name}</h3>
      <div
        className={styles.cardContent}
        style={{ color: isOdd ? "#ffffff" : "#000000" }}
      >
        <p>Main Facilities</p>
        <p>{facilities}</p>
        <div>
          {" "}
          <Bed isOdd={isOdd} />
          {bed} bed
        </div>
        <div>
          {" "}
          <Person isOdd={isOdd} />
          {person} person
        </div>
      </div>
      <div
        className={styles.cardPrice}
        style={{ color: isOdd ? "#ffffff" : "#106a64" }}
      >
        {formatRupiah(price)}{" "}
        <span style={{ color: isOdd ? "#ffffff" : "#616161" }}>/night</span>
      </div>
    </div>
  );
};

export default CardVillaStudio;
