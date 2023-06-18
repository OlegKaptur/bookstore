import React, { useState } from "react";

import Typography from "components/Typography/Typography";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const [themeName, setThemeName] = useState(() => localStorage.getItem("theme") ?? "light");

  const changeTheme = () => {
    const nextThemeName = themeName === "light" ? "dark" : "light";

    setThemeName(nextThemeName);
    localStorage.setItem("theme", nextThemeName);

    document.body.dataset.theme = nextThemeName;
    // document.body.setAttribute("data-theme", nextThemeName);
  };

  return (
    <div className={styles.footer}>
      <Typography variant="p" color="secondary">
        &copy;2022 Bookstore
      </Typography>
      <div className={styles.theme}>
        <label htmlFor="theme">
          <Typography color="secondary" variant="span">
            {themeName}
          </Typography>
        </label>
        <input type="checkbox" name="theme" id="theme" onChange={changeTheme} />
      </div>
    </div>
  );
};

export default Footer;
