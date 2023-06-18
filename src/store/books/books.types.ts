import { Book } from "api/types";

export type BookWithCount = Book & { count: number };

export interface State {
  book: Book | null;
  books: Book[];
  loading: boolean;
  favorite: Book[];
  basket: BookWithCount[];
  // basket: Book[];
  newBooks: Book[];
  page: number;
  query: string;
}
