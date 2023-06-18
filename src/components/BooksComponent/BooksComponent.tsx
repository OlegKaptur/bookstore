import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store/books";
import { getBooks, getNewBooks } from "../../store/books/books.action";
import { getBookSlice, getBooks as getBooksSelector } from "store/books/books.selectors";
import { increasePage } from "store/books/books.reducer";
import { useDidUpdate } from "hooks/useDidUpdate";
import BooksItemList from "components/BooksItemList/BooksItemList";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import Subscribe from "components/Subscribe/Subscribe";

const Books: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { page, books, query, newBooks } = useSelector(getBookSlice);
  const listBook = useSelector(getBooksSelector);

  const heandleClick = () => dispatch(increasePage());

  useDidUpdate(() => {
    if (query) {
      dispatch(getBooks());
    }
  }, [query, page]);

  useEffect(() => {
    if (newBooks.length === 0) {
      dispatch(getNewBooks());
    }
  }, [dispatch]);

  let newBooksList = query ? books : newBooks;

  if (!newBooksList.length) return null;

  return (
    <>
      <div>
        <BooksItemList books={listBook}></BooksItemList>
        {query ? <LoadMoreButton onClick={heandleClick} /> : ""}
        <Subscribe />
      </div>
    </>
  );
};

export default Books;
