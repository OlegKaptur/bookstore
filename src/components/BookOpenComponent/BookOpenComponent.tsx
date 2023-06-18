import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "api/book/book";
import { getBookSlice } from "../../store/books/books.selectors";
import Subscribe from "../Subscribe/Subscribe";
import { resetBook, setBook } from "store/books/books.reducer";
import SocialComponet from "components/SocialComponent/SocialComponent";
import NewBooks from "components/NewBooks/NewBooks";
import BookOpenItem from "../BookOpenItem/BookOpenItem";
import styles from "./BookOpenComponent.module.css";

const BookOpenComponet: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book } = useSelector(getBookSlice);

  useEffect(() => {
    console.log(id);
    if (!id) return () => {};
    getBook(id).then((book) => {
      dispatch(setBook(book));
    });

    return () => dispatch(resetBook());
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.wrapper}>
        <div>{book && <BookOpenItem book={book} />}</div>
        <SocialComponet />
        <Subscribe />
        <NewBooks />
      </div>
    </>
  );
};

export default BookOpenComponet;
