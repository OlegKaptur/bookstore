import Header from "components/Header/Header";
import MainLayout from "../layouts/MainLayout";
import Footer from "components/Footer/Footer";
import FavoriteItem from "components/FavoriteItem/FavoriteItem";
import FavoriteComponent from "components/FavoriteComponent/FavoriteComponent";
// import Basket from "../../components/Basket/Basket";

const BasketPage = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<FavoriteComponent />}
      footer={<Footer />}
    />
  );
};

export default BasketPage;
