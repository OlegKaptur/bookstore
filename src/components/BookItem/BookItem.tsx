import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Book } from "api/types";

import styles from "./BookItem.module.css";
import Typography from "components/Typography/Typography";
import Stars from "components/Stars/Stars";

interface BookItemProps {
  book: Book;
  link: string;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const colors = ["#CAEFF0", "#F4EEFD", "#FEE9E2"];

  const randomColors = (min: number, max: number) => {
    return colors[Math.floor(Math.random() * (max - min + 1) + min)];
  };

  return (
    <NavLink className={styles.link} to={`/books/${book.isbn13}`}>
      <div className={styles.wrapper}>
        {/* <div className={styles.wrapper_bg}> */}
        <div className={styles.wrapper_bg} style={{ background: randomColors(0, 3) }}>
          <img className={styles.img} loading="lazy" src={book.image} alt={book.image} />
        </div>
        <div className={styles.wrapper_info}>
          <Typography variant="h4" color="primary" fontStyles="bebasNeue" className={styles.title}>
            {book.title}
          </Typography>
          <Typography variant="p" color="secondary" fontStyles="roboto" className={styles.subtitle}>
            {book.subtitle}
          </Typography>
          <div className={styles.wrapper_price}>
            <Typography className={styles.price} variant="h4" fontStyles="bebasNeue">
              {book.price}
            </Typography>
            <div className={styles.wrapper_stars}>
              <Stars stars={book.rating || 0} className={styles.stars} />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookItem;
