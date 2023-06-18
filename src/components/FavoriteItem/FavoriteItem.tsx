import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFavorite } from "../../store/books/books.reducer";
import { Book, Book as IBook } from "../../api/types";
import { AppDispatch } from "store/books";

import Typography from "components/Typography/Typography";
import Icons from "components/Icons/Icons";
import Stars from "components/Stars/Stars";
import styles from "components/FavoriteItem/FavoriteItem.module.css";

interface FavoriteItemProps {
  favorite: Book;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ favorite }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleReset = () => {
    dispatch(resetFavorite(favorite.isbn13));
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_bg}>
            <img src={favorite.image} alt="" className={styles.image} />
          </div>
          <div className={styles.info}>
            <Typography className={styles.title} variant="h4" fontStyles="bebasNeue">
              {favorite.title}
            </Typography>
            <Typography
              className={styles.title}
              color="secondary"
              variant="p"
              fontStyles="bebasNeue"
            >
              {favorite.authors}
            </Typography>

            <div className={styles.rating}>
              <Typography
                className={styles.price}
                variant="h4"
                color="primary"
                fontStyles="bebasNeue"
              >
                {favorite.price}
              </Typography>
              <Stars stars={favorite.rating} className={styles.stars} />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.delete} onClick={handleReset}>
            <Icons name="heart_red" />
          </button>
        </div>
      </div>
    </>
  );
};
export default FavoriteItem;
