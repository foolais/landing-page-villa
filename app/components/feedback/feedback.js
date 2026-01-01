import CustomerIcon from "../../../public/icons/customerIcons";
import { feedBackData } from "../../utils/dummy";
import CardFeedback from "../card/cardFeedback";
import styles from "./feedback.module.css";

const FeedBack = () => {
  return (
    <div className={styles.feedBackWrapper}>
      <div>
        <div>
          <CustomerIcon className={styles.icons} />
        </div>
        <h2>
          What Our <span>Customer</span> Are Saying
        </h2>
      </div>
      <div className={styles.cardWrapper}>
        {feedBackData.map((item) => (
          <CardFeedback key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
