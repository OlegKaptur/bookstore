import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "../pages/Main";
import BookOpenComponet from "components/BookOpenComponent/BookOpenComponent";
import Book from "pages/Book";
import Basket from "pages/Basket";
import Favorite from "pages/Favorite";

const PublicRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Main />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default PublicRoutes;
