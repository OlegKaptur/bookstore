import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import shuffle from "lodash.shuffle";
import { Book } from "../../api/types";
import { setList } from "store/books/books.reducer";
import { getNewBooks } from "api/books/books";

import BookItem from "components/BookItem/BookItem";
import Typography from "components/Typography/Typography";
import styles from "./NewBooks.module.css";

const NewBooks: React.FC = () => {
  const { id } = useParams();

  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    getNewBooks().then((data) => {
      setBooks(data.books);
      setList(data.books);
    });
  }, []);

  const randomBooks = useMemo(() => shuffle(books).slice(0, 10), [books, id]);

  const [[start, end], setSlide] = useState([0, 3]);

  const handleNext = () => {
    if (end === 10) return;
    const nextStart = start + 1;
    const nextEnd = end + 1;
    setSlide([nextStart, nextEnd]);
  };
  const handlePrev = () => {
    if (start === 0) return;
    const nextStart = start - 1;
    const nextEnd = end - 1;
    setSlide([nextStart, nextEnd]);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_title}>
          <Typography className={styles.title} variant="h1" fontStyles="bebasNeue">
            New books
          </Typography>
          <div className={styles.wrapper_button}>
            <button className={styles.button} onClick={handlePrev} disabled={start === 0}>
              &#10229;
            </button>
            <button className={styles.button} onClick={handleNext} disabled={end === 10}>
              &#10230;
            </button>
          </div>
        </div>

        <div className={styles.random}>
          {randomBooks.slice(start, end).map((book) => (
            <BookItem book={book} link={`/books/${book.isbn13}`} key={book.isbn13}></BookItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewBooks;
