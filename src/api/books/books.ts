import { Book } from "api/types";

import { bookAxios } from "../index";

export const getBooks = (
  page: number,
  query: string
): Promise<{
  error: string;
  total: string;
  page: string;
  books: Book[];
}> => {
  return bookAxios(`/search/${query}?page=${page}`).then((res) => res.data);
};

export const getNewBooks = (): Promise<{
  total: string;
  books: Book[];
}> => {
  return bookAxios(`/new`).then((res) => res.data);
};

// export const getBooks = (
//   page: number
// ): Promise<{
//   error: string;
//   total: string;
//   page: string;
//   books: Book[];
// }> => {
//   return fetch(`${SPACE_API_URL}/search/mongodb?page=${page}`).then((res) =>
//     res.json()
//   );
// };
