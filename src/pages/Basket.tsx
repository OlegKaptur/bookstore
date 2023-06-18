import Header from "components/Header/Header";
import MainLayout from "../layouts/MainLayout";
import Footer from "components/Footer/Footer";
import BasketComponent from "components/BasketComponent/BasketComponent";
// import Basket from "../../components/Basket/Basket";

const BasketPage = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<BasketComponent />}
      footer={<Footer />}
    />
  );
};

export default BasketPage;
