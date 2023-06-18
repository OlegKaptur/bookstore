import Header from "components/Header/Header";
import MainLayout from "../layouts/MainLayout";
// import MainComponent from "components/Main/Main";
import Footer from "components/Footer/Footer";
import BookItem from "components/BookItem/BookItem";
import BooksItemList from "components/BooksItemList/BooksItemList";
import BooksComponent from "../components/BooksComponent/BooksComponent";
import BookOpenComponent from "components/BookOpenComponent/BookOpenComponent";

const Main = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<BooksComponent />}
      footer={<Footer />}
    />
  );
};

export default Main;
