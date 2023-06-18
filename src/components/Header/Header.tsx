import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQueryValue } from "store/books/books.reducer";
import NavBar from "components/NavBar/NavBar";
import Icons from "../Icons/Icons";
import styles from "./Header.module.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispach = useDispatch();

  const heandleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const heandleSearchClick = () => {
    dispach(setQueryValue(searchValue));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <NavLink to="/">
          <Icons name="logo" />
        </NavLink>
      </div>
      <div className={styles.input}>
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
      <NavLink to="/favorite">
        <button className={styles.button}>
          <Icons name="heart" />
        </button>
      </NavLink>
      <NavLink to="/basket">
        <button className={styles.button}>
          <Icons name="shopping" />
        </button>
      </NavLink>
      <NavLink to="/">
        <button className={styles.button}>
          <Icons name="user" />
        </button>
      </NavLink>
      <NavBar />
    </div>
  );
};

export default Header;
