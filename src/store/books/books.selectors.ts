import store, { RootStore } from "store/books";
import { State } from "./books.types";
import { Book, Books } from "api/types";

export const getBookSlice = (store: RootStore): State => store.book;

// export const getBooks = (store: RootStore): Book[] =>
//   store.book.query ? store.book.books : store.book.newBooks;

export const getBooks = (store: RootStore): State["books"] | State["newBooks"] =>
  store.book.query ? store.book.books : store.book.newBooks;

export const getAddFavorite = (store: RootStore): Book[] => store.book.favorite;

export const isBookFavorite = (store: RootStore): boolean =>
  !!store.book.favorite.find((item) => item.isbn13 === store.book.book?.isbn13);

export const getAddBasket = (store: RootStore): Book[] => store.book.basket;

export const isBookBasket = (store: RootStore): boolean =>
  !!store.book.basket.find((item) => item.isbn13 === store.book.book?.isbn13);

export const getTotalSum = (store: RootStore): number =>
  store.book.basket.reduce((total, item) => {
    const price = item.count * Number(item.price.slice(1));
    return total + price;
  }, 0);
