import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "store/books";
import { addAllToBasket } from "store/books/books.reducer";
import { getAddBasket, getTotalSum } from "store/books/books.selectors";
import { useDidUpdate } from "hooks/useDidUpdate";
import BasketItem from "components/BasketItem/BasketItem";
import Button from "components/Button/Button";
import Typography from "components/Typography/Typography";
import styles from "components/BasketComponent/BasketComponent.module.css";

// interface BasketComponentBook {
//   books: BookWithCount[];
// }

const BasketComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const book = useSelector(getAddBasket);
  const totalSum = useSelector(getTotalSum);
  const totalWat = totalSum * 0.2;
  const totalPrice = totalSum + totalWat;

  const basket = useSelector(getAddBasket);
  useEffect(() => {
    if (localStorage.getItem("cards")) {
      dispatch(addAllToBasket(JSON.parse(localStorage.getItem("cards") as string)));
    }
  }, []);

  useDidUpdate(() => {
    localStorage.setItem("cards", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <div>
        <NavLink className={styles.link} to="/">
          <Typography variant="h3">&#10229;</Typography>
        </NavLink>
        <Typography variant="h3" color="primary" fontStyles="bebasNeue">
          Your cart
        </Typography>
        {book?.map((book) => (
          <BasketItem basket={book} key={book.isbn13}></BasketItem>
        ))}
        <div className={styles.basket__totals}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_info}>
              <div className={styles.total}>
                <Typography color="secondary" variant="p" fontStyles="roboto">
                  Sum total
                </Typography>
                <Typography color="secondary" variant="p" fontStyles="roboto">
                  VAT
                </Typography>
                <Typography variant="h3" color="primary" fontStyles="bebasNeue">
                  Total:
                </Typography>
              </div>
              <div className={styles.price}>
                <Typography variant="p" color="primary" fontStyles="bebasNeue">
                  ${totalSum.toFixed(2)}
                </Typography>
                <Typography variant="p" color="primary" fontStyles="bebasNeue">
                  ${totalWat.toFixed(2)}
                </Typography>
                <Typography variant="h3" color="primary" fontStyles="bebasNeue">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </div>
            </div>
            <Button className={styles.button}>Check out</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketComponent;
