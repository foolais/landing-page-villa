import Image from "next/image";
import styles from "./about.module.css";
import AboutImage from "../../../public/about.jpg";
import { villaStudio } from "../../utils/dummy";
import CardVillaStudio from "../card/cardVillaStudio";
import Facilities1 from "../../../public/facilities-1.jpg";
import Facilities2 from "../../../public/facilities-2.jpg";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h2>
        About Villa <span>Amadaha</span>
      </h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImages}>
          <Image src={AboutImage} fill alt="about" />
        </div>
        <div className={styles.aboutRightSide}>
          <p>
            Villa Amadaha consist of Two Luxury Villas and one Traditional
            Javanese House surrounded by a tranquil rain forest setting,
            traditional Indonesian houses anda a farm overlooking the area.
          </p>
          <div className={styles.aboutStats}>
            <div>
              <div className={styles.aboutStatsText}>
                <span>+6</span>
                <span>/ Room</span>
              </div>
              <span>Room options</span>
            </div>
            <div>
              <div className={styles.aboutStatsText}>
                <span>+2</span>
                <span>/ Facilities</span>
              </div>
              <span>Facilities available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Choice Villa Studio */}
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Our choise of <span>Villa Studios</span>
      </h2>
      <div className={styles.villaStudioWrapper}>
        {villaStudio.map((villa, index) => (
          <CardVillaStudio key={villa.id} {...villa} isOdd={index % 2 !== 0} />
        ))}
      </div>
      <div className={styles.loadMoreButton}>Load More</div>

      {/* Facilities */}
      <div className={styles.facilitiesWrapper}>
        <div>
          <h2>
            Various <span>facilities</span> that you can enjoy
          </h2>
          <p>We bring you together with your dream holiday</p>
          <div className={styles.facilitiesButton}>Explore</div>
        </div>
        <div>
          <div className={styles.facilityImageWrapper}>
            <Image src={Facilities1} alt="facilities1" fill />
          </div>
          <div className={styles.facilityImageWrapper}>
            <Image src={Facilities2} alt="facilities2" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
