import { PayloadAction, createSlice, isAction } from "@reduxjs/toolkit";

import { BookWithCount, State } from "./books.types";
import { Book } from "api/types";
// import { getNewBooks } from "./books.action";
import { getBook, getBooks, getNewBooks } from "./books.action";
import { isAsExpression } from "typescript";
import { act } from "react-dom/test-utils";

const initialState: State = {
  book: null,
  books: [],
  basket: [],
  loading: false,
  newBooks: [],
  favorite: [],
  page: 1,
  query: "",
};

const step = 1;

const book = createSlice({
  name: "books",
  initialState,
  reducers: {
    resetBook: (state) => {
      state.book = null;
    },
    setBook: (state, action: PayloadAction<Book>) => {
      state.book = action.payload;
    },
    increasePage: (state) => {
      state.page += step;
    },
    resetPage: (state) => {
      state.page = initialState.page;
    },

    resetBooks: (state) => {
      state.books = [];
    },

    setQueryValue: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.page = initialState.page;
      state.books = initialState.books;
    },

    setList: (state, action: PayloadAction<Book[]>) => {
      state.books = state.books.concat(action.payload);
    },

    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      // state.basket = [...state.basket, action.payload];
    },
    addAllToBasket: (state, action: PayloadAction<Book[]>) => {
      state.basket = action.payload;
    },
    resetBasket: (state, action: PayloadAction<Book["isbn13"]>) => {
      let book = state.basket.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.basket = state.basket.filter((book) => book.isbn13 !== action.payload);
      }
    },
    resetBaskets: (state) => {
      state.basket = [];
    },

    // addToFavorite: (state, action) => {
    //   state.favorite = [...state.favorite, action.payload];
    // },
    incrementCount: (state, action: PayloadAction<Book["isbn13"]>) => {
      let book = state.basket.find((book) => book.isbn13 === action.payload);
      if (book) {
        book.count += 1;
      }
    },

    decrementCount: (state, action: PayloadAction<Book["isbn13"]>) => {
      let book = state.basket.find((book) => book.isbn13 === action.payload);
      if (book) {
        book.count -= 1;
      }
    },

    addToFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },

    addAllBook: (state, action: PayloadAction<Book[]>) => {
      state.favorite = action.payload;
    },
    resetFavorite: (state, action: PayloadAction<Book["isbn13"]>) => {
      let book = state.favorite.find((book) => book.isbn13 === action.payload);
      if (book) {
        state.favorite = state.favorite.filter((book) => book.isbn13 !== action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = state.books.concat(action.payload.books);
      state.loading = false;
    });

    // builder.addCase(getNewBooks.fulfilled, (state, action) => {
    //   state.newBooks = state.books.concat(action.payload.books);
    // });

    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.newBooks = action.payload.books;
    });

    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBook.fulfilled, (state, action) => {
      state.book = action.payload;
    });
  },
});

export const {
  resetBook,
  resetBooks,
  increasePage,
  resetPage,
  setBook,
  setList,
  addToFavorite,
  resetFavorite,
  addAllBook,
  addToBasket,
  addAllToBasket,
  resetBasket,
  resetBaskets,
  incrementCount,
  decrementCount,
  setQueryValue,
} = book.actions;

export default book.reducer;
