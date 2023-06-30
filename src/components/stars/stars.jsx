import StarIcon from "@mui/icons-material/Star";

import styles from "./stars.module.css";

export const Stars = ({ phone }) => (
  <div className={styles.container}>
    <StarIcon color="secondary" />
    <StarIcon color="secondary" />
    <StarIcon color="secondary" />
    <StarIcon color="secondary" />
    <StarIcon color="secondary" />
    <span className={styles.comment}>{phone.comment}</span>
  </div>
);
