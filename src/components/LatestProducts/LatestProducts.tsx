import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProducts } from "../../redux/slice/productsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";


const LatestProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.products);
  
  useEffect(() => {
    dispatch(fetchLatestProducts(10));
    console.log(items)
  }, [dispatch]);

  if (status === "loading") return <p>Loading Best Selling Products...</p>;
  if (status === "failed") return <p> Error: {error}</p>;
  if (status === "succeeded" && items.length === 0) {
    return <p>No Products</p>;
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        },
      },
    ],
  };
  

  return (
    <div className="py-10 container mx-auto  border-b border-gray-300 ">
    <Title name="Best Selling Products" desc="Customer Preferred"/>
      <div className="p-3 bg-gray-100">
        <Slider {...settings}>
          {items.length > 0 ? (
            items.map((product) => (
              <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
            ))
          ) : (
            <p>No Products</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default LatestProducts;
