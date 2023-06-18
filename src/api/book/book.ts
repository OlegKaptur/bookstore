import { Book } from "api/types";

import { bookAxios } from "../index";

export const getBook = (id: Book["isbn13"]): Promise<Book> => {
  return bookAxios(`/books/${id}`).then((res) => res.data);
};
