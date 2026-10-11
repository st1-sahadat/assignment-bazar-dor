import Marquee from "./component/HomePage/Marquee";
import Banner from "./component/HomePage/Banner";
import ProductsRateIncrease from "./component/HomePage/ProductsUpDownAll";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Banner />
      <ProductsRateIncrease />
    </div>
  );
}
