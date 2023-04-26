import "../styles/main.scss";

import ProductComponent from "../components/ProductComponent/ProductComponent";
import PromoSwiper from "../components/PromoSwiper/PromoSwiper";
import InstagramComponent from "../components/InstagramComponent/InstagramComponent";

const Home = () => {
  return (
    <div className="p-homepage">
      <ProductComponent />
      <PromoSwiper />
      <InstagramComponent />
    </div>
  );
};

export default Home;
