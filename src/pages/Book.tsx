import Header from "components/Header/Header";
import MainLayout from "../layouts/MainLayout";
import Footer from "components/Footer/Footer";
import BookOpenComponet from "components/BookOpenComponent/BookOpenComponent";

const Book = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<BookOpenComponet />}
      footer={<Footer />}
    />
  );
};

export default Book;
