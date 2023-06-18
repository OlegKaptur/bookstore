import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "components/Icons/Icons";
import styles from "./SocialComponent.module.css";

const SocialComponet: React.FC = () => {
  return (
    <>
      <div className={styles.social}>
        <NavLink to={"https://www.facebook.com/"} target="_blank">
          <button className={styles.button}>
            <Icons name="facebook" />
          </button>
        </NavLink>
        <NavLink to={"https://twitter.com/?lang=ru"} target="_blank">
          <button className={styles.button}>
            <Icons name="twitter" />
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SocialComponet;
