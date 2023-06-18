import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { Book, Book as IBook } from "../../api/types";
import { AppDispatch } from "store/books";
import {
  getAddBasket,
  getAddFavorite,
  isBookBasket,
  isBookFavorite,
} from "store/books/books.selectors";
import { addAllBook, addAllToBasket, addToBasket, addToFavorite } from "store/books/books.reducer";
import Tabs, { Tab } from "components/Tabs/Tabs";
import Button from "components/Button/Button";
import Typography from "components/Typography/Typography";
import Stars from "components/Stars/Stars";
import Icons from "components/Icons/Icons";
import styles from "components/BookOpenItem/BookOpenItem.module.css";

interface BookOpenItemProps {
  book: Book;
}

const tabs: Tab[] = [
  { label: "Description", value: "description" },
  { label: "Authors", value: "authors" },
  { label: "Reviews", value: "reviews" },
];

const BookOpenItem: React.FC<BookOpenItemProps> = ({ book }) => {
  const [activeTab, setActiveTab] = useState<Tab["value"]>(tabs[0].value);
  const dispatch = useDispatch<AppDispatch>();
  const booksIsBasket = useSelector(isBookBasket);

  const favorites = useSelector(getAddFavorite);
  const booksIsFavorites = useSelector(isBookFavorite);

  const handleAdd = () => {
    dispatch(addToBasket({ ...book, count: 1 }));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") as string);
    if (favorites) {
      dispatch(addAllBook(favorites));
    }
  }, []);

  const basket = useSelector(getAddBasket);
  useDidUpdate(() => {
    localStorage.setItem("cards", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("cards") as string);
    if (basket) {
      dispatch(addAllToBasket(basket));
    }
  }, []);

  useDidUpdate(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const hendaleClick = () => {
    dispatch(addToFavorite(book));
  };

  const handleTabClick = (tab: Tab) => setActiveTab(tab.value);

  return (
    <>
      <NavLink className={styles.link} to="/">
        <Typography className={styles.back} variant="h3">
          &#10229;
        </Typography>
      </NavLink>
      <Typography className={styles.title} variant="h1" fontStyles="bebasNeue">
        {book.title}
      </Typography>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_bg}>
          <img src={book.image} alt={book.title} />
          {booksIsFavorites ? (
            <button className={styles.button_none}></button>
          ) : (
            <button className={styles.button_like} onClick={hendaleClick}>
              <Icons name="heart_white" />
            </button>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.price}>
            <Typography variant="h3" fontStyles="bebasNeue">
              {book.price}
            </Typography>
            <Stars stars={book.rating} className={styles.stars} />
          </div>
          <div className={styles.description}>
            <div className={styles.description__row}>
              <div className={styles.description__label}>
                <Typography variant="h6" color="secondary" fontStyles="roboto">
                  Authors
                </Typography>
                <Typography variant="h6" color="secondary" fontStyles="roboto">
                  Publisher
                </Typography>
                <Typography variant="h6" color="secondary" fontStyles="roboto">
                  Language
                </Typography>
                <Typography variant="h6" color="secondary" fontStyles="roboto">
                  Format
                </Typography>
              </div>
              <div className={styles.description__value}>
                <Typography variant="h6" color="primary" fontStyles="roboto">
                  {book.authors}
                </Typography>
                <Typography variant="h6" color="primary" fontStyles="roboto">
                  {book.publisher}
                </Typography>
                <Typography variant="h6" color="primary" fontStyles="roboto">
                  English
                </Typography>
                <Typography variant="h6" color="primary" fontStyles="roboto">
                  Paper book / ebook (PDF)
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.more_detailse}>
            <Typography variant="h6" color="primary" fontStyles="roboto">
              More detailse
            </Typography>
          </div>
          {booksIsBasket ? (
            <NavLink className={styles.link} to={"/basket"}>
              <Button className={styles.button_disabled}>in basket</Button>
            </NavLink>
          ) : (
            <Button className={styles.button} onClick={handleAdd}>
              add to cart{" "}
            </Button>
          )}
          <div className={styles.preview_book}>
            <Typography variant="h6" color="primary" fontStyles="roboto">
              Preview book
            </Typography>
          </div>
        </div>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick}></Tabs>
      <div className={styles.tabs}>
        {activeTab === "description" && <>{book.desc}</>}
        {activeTab === "authors" && <>{book.authors}</>}
        {/* {activeTab === "reviews" && <"">} */}
      </div>
    </>
  );
};

export default BookOpenItem;
