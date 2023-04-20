import "../styles/main.scss";

import ProductComponent from "../components/ProductComponent/ProductComponent";
import PromoSwiper from "../components/PromoSwiper/PromoSwiper";

const Home = () => {
  return (
    <div className="p-homepage">
      <ProductComponent />
      <PromoSwiper />
    </div>
  );
};

export default Home;
