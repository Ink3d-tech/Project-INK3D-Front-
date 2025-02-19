import Buttons from "@/app/Home/Buttons.component";
import Carousel from "@/app/Home/Carousel.component";
import ProductList1 from "@/app/Home/ProductList1.component";
import ProductList2 from "./ProductList2.component";
import ProductList3 from "./ProductList3.component";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <Carousel imageIds={[1, 2, 3]} />
      <Buttons />
      <ProductList1 />

      <Carousel imageIds={[4, 5, 6]} />
      <ProductList2 />

      <Carousel imageIds={[7, 8, 9]} />
      <ProductList3 />
    </div>
  );
}
