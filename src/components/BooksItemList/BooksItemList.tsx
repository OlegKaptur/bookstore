import React from "react";
import { State } from "store/books/books.types";
import BookItem from "components/BookItem/BookItem";
import styles from "./BooksItemList.module.css";
import Typography from "components/Typography/Typography";

interface BooksItemListProps {
  // books: Book[];
  books: State["books"] | State["newBooks"];
}

const BooksItemList: React.FC<BooksItemListProps> = ({ books }) => {
  return (
    <div>
      <Typography className={styles.title} variant="h1" fontStyles="bebasNeue">
        New Releases Books
      </Typography>
      <ul className={styles.list}>
        {books.map((book) => (
          <li className={styles.listItem} key={book.isbn13}>
            <BookItem book={book} link={`/books/${book.isbn13}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksItemList;
