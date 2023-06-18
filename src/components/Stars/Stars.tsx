import React from "react";
import Icons from "components/Icons/Icons";

import styles from "./Stars.module.css";

const Stars: React.FC<{ stars: number; className?: string }> = ({ stars }) => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: 5 }).map((_, star) =>
        stars <= star ? <Icons name="star" /> : <Icons name="starblack" />
      )}
    </div>
  );
};
export default Stars;
