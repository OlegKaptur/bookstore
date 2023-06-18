import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./books.reducer";

// const logger: ThunkMiddleware = (store) => (next) => (action) => {
//   console.log("=====> ", action);
//   return next(action);
// };

const store = configureStore({
  reducer: {
    book: booksReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
