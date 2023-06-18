import axios from "axios";

import { BOOK_API_URL } from "consts/conf";

export const bookAxios = axios.create({
  baseURL: BOOK_API_URL,
});
