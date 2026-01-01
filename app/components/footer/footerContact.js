import styles from "./footerContact.module.css";
import Location from "../../../public/icons/location";
import Calls from "../../../public/icons/calls";
import Email from "../../../public/icons/email";

const FooterContact = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>About</li>
          <li>Facility</li>
          <li>Gallery</li>
        </ul>
      </div>
      <div>
        <h3>Room Categorys</h3>
        <ul>
          <li>4 Bedroom Villa</li>
          <li>2 Bedroom Villa</li>
          <li>Joglo House</li>
          <li>Bamboo Studio</li>
          <li>Bamboo House</li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <Location />
            <p>
              Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa Barat
            </p>
          </li>
          <li>
            <Calls />
            <p>+ 62812345678</p>
          </li>
          <li>
            <Email />
            <p>example@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
