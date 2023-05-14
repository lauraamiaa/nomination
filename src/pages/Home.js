import "../styles/main.scss";

import ProductComponent from "../components/ProductComponent/ProductComponent";
import PromoSwiper from "../components/PromoSwiper/PromoSwiper";
import InstagramComponent from "../components/InstagramComponent/InstagramComponent";
import BannerComponent from "../components/BannerComponent/BannerComponent";

const Home = () => {
  return (
    <div className="p-homepage">
      <ProductComponent />
      <PromoSwiper />
      <InstagramComponent />
      <BannerComponent />
    </div>
  );
};

export default Home;
