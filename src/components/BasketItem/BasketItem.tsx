import { useDispatch } from "react-redux";
import { AppDispatch } from "store/books";
import { BookWithCount } from "store/books/books.types";
import { decrementCount, incrementCount, resetBasket } from "store/books/books.reducer";
import Typography from "components/Typography/Typography";
import styles from "components/BasketItem/BasketItem.module.css";

export interface BasketItemProps {
  basket: BookWithCount;
}

const BasketItem: React.FC<BasketItemProps> = ({ basket }) => {
  const dispatch = useDispatch<AppDispatch>();

  const oneBookPrice = `$${(basket.count * Number(basket.price.slice(1))).toFixed(2)}`;

  const increment = () => {
    dispatch(incrementCount(basket.isbn13));
  };

  const decrement = () => {
    if (basket.count === 1) {
      dispatch(resetBasket(basket.isbn13));
    } else {
      dispatch(decrementCount(basket.isbn13));
    }
  };

  const handleReset = () => {
    dispatch(resetBasket(basket.isbn13));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_bg}>
            <img src={basket.image} alt="" className={styles.image} />
          </div>

          <div className={styles.info}>
            <Typography variant="h4" fontStyles="bebasNeue">
              {basket.title}
            </Typography>
            <Typography color="secondary" variant="p" fontStyles="roboto">
              {basket.authors}
            </Typography>

            <div className={styles.count}>
              <button className={styles.button} onClick={decrement}>
                <Typography variant="h3" fontStyles="bebasNeue">
                  &minus;
                </Typography>
              </button>
              <Typography variant="h4" fontStyles="bebasNeue">
                {basket.count}
              </Typography>

              {/* <Typography>{count <= 0 ? 1 : count}</Typography> */}

              <button className={styles.button} onClick={increment}>
                <Typography variant="h3" fontStyles="bebasNeue">
                  &#43;
                </Typography>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <Typography variant="h4" color="primary" fontStyles="bebasNeue">
            {oneBookPrice}
          </Typography>
        </div>
        <div className={styles.button_close}>
          <button className={styles.button} onClick={handleReset}>
            <Typography variant="h3" color="primary" fontStyles="bebasNeue">
              &times;
            </Typography>
          </button>
        </div>
      </div>
    </>
  );
};
export default BasketItem;
