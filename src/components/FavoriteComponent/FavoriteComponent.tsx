import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AppDispatch } from "store/books";
import { addAllBook } from "store/books/books.reducer";
import { getAddFavorite } from "store/books/books.selectors";
import { useDidUpdate } from "hooks/useDidUpdate";

import FavoriteItem from "components/FavoriteItem/FavoriteItem";
import Typography from "components/Typography/Typography";
import NewBooks from "components/NewBooks/NewBooks";
import styles from "components/FavoriteComponent/FavoriteComponent.module.css";

const FavoriteComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const book = useSelector(getAddFavorite);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      dispatch(addAllBook(JSON.parse(localStorage.getItem("favorites") as string)));
    }
  }, []);
  useDidUpdate(() => {
    localStorage.setItem("favorites", JSON.stringify(book));
  }, [book]);

  return (
    <>
      <div>
        <NavLink className={styles.link} to="/">
          <Typography variant="h3">&#10229;</Typography>
        </NavLink>
        <Typography className={styles.title} variant="h1" fontStyles="bebasNeue">
          Favorites
        </Typography>
        {book?.map((book) => (
          <FavoriteItem favorite={book} key={book.isbn13}></FavoriteItem>
        ))}
      </div>
      <NewBooks />
    </>
  );
};

export default FavoriteComponent;
