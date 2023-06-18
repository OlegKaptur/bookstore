import React from "react";

import Button from "../Button/Button";
import Typography from "components/Typography/Typography";
import styles from "./Subscribe.module.css";

const Subscribe: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <Typography variant="h3" color="primary" fontStyles="bebasNeue">
          Subscribe to Newsletter
        </Typography>
        <Typography variant="h5" color="secondary" fontStyles="roboto">
          Be the first to know about new IT books, upcoming releases, exclusive offers and more
        </Typography>
      </div>
      <form className={styles.subscribe_form}>
        <input className={styles.subscribe_input} placeholder="Your email" />
        <Button>Subscribe</Button>
      </form>
    </div>
  );
};

export default Subscribe;
