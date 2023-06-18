export interface Books {
  title: string;
  subtitle: string;
  isbn13: number | string;
  price: string;
  image: string;
  url: string;
}

export interface Book {
  image_url: string | undefined;
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: number | string;
  pages: string;
  year: string;
  rating: number;
  // rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  count: number;
}
