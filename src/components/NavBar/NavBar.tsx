import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQueryValue } from "store/books/books.reducer";

import Icons from "components/Icons/Icons";
import Typography from "components/Typography/Typography";
import Button from "components/Button/Button";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("modal-open", isOpen);
  }, [isOpen]);

  const [searchValue, setSearchValue] = useState("");
  const dispach = useDispatch();

  const heandleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const heandleSearchClick = () => {
    dispach(setQueryValue(searchValue));
  };
  const openMenuClasses = [styles.mobileNav, styles.mobileNav_open].join(" ");

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileNav_toggle}>
        {isOpen ? <Icons name="cancel" /> : <Icons name="burger" />}
      </button>
      <div className={isOpen ? openMenuClasses : styles.mobileNav}>
        <div className={styles.mobileNav_wrapper}>
          <div className={styles.mobileNav_spacer}></div>
          <div className={styles.mobileNav_search}>
            <input
              type="search"
              name="search"
              placeholder="Search"
              className={styles.search}
              value={searchValue}
              onChange={heandleValueChange}
            />
            <button className={styles.button_search} onClick={heandleSearchClick}>
              <Icons name="search" />
            </button>
          </div>
          <ul className={styles.mobileNav_list}>
            <li>
              <NavLink to="/favorite">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/basket">Cart</NavLink>
            </li>
          </ul>
          <Button className={styles.mobileNav_signIn}>sign in</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
