import Image from "next/image";
import styles from "./cardFeedback.module.css";

const CardFeedback = ({ messages, avatar, name, job }) => {
  return (
    <div className={styles.cardWrapper}>
      <p>”{messages}”</p>
      <di v className={styles.userInfo}>
        <div className={styles.avatarWrapper}>
          <Image src={avatar} alt={name} fill />
        </div>
        <div>
          <p>{name}</p>
          <p>{job}</p>
        </div>
      </di>
    </div>
  );
};

export default CardFeedback;
