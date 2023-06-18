import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks as getBooksApi } from "../../api/books/books";
import { getBook as getBookApi } from "../../api/book/book";
import { getNewBooks as getNewBooksApi } from "../../api/books/books";
import { RootStore } from "store/books";
import { Book } from "../../api/types";
import { getBookSlice } from "./books.selectors";

//https://redux-toolkit.js.org/api/createAsyncThunk

export const getBooks = createAsyncThunk("books/getBooks", (arg, thunkAPI) => {
  const { page, query } = getBookSlice(thunkAPI.getState() as RootStore);
  return getBooksApi(page, query);
});

export const getNewBooks = createAsyncThunk("books/getNewBooks", () => {
  return getNewBooksApi();
});

export const getBook = createAsyncThunk("book/getBook", (bookId: Book["isbn13"]) =>
  getBookApi(bookId)
);
