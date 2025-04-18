import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";



interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const numericProductId = parseInt(productId || "0", 10);
  useEffect(() => {
    const numericProductId = Number(productId);
    if (!numericProductId || isNaN(numericProductId)) {
      console.error("Invalid productId:", productId);
      return;
    }
    axios.get(`https://fakestoreapi.com/products/${numericProductId}`).then((response) => {
      setProduct(response.data);
    });
  }, [numericProductId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between gap-10 px-5 md:px-0">
        <div className="border border-blue-300 p-4 md:w-1/2 md:h-1/2">
          <img src={product.image} alt={product.title} className="w-full h-full " />
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-red-600 text-lg font-semibold">Price: {product.price}$</p>
            <p className="text-lg font-medium mb-2 text-blue-500">
            Category: {product.category}
            </p>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
            <div className="flex gap-[7px] items-center justify-between">
              <span className=" text-lg text-yellow-400 font-semibold">Rating:</span>
              {Array.from({ length: 5 }).map((_, index) => {
                const fullStars = Math.floor(product.rating.rate);
                const hasHalfStar = product.rating.rate - fullStars >= 0.5; 
                if (index < fullStars) {
                  return <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />;
                } else if (index === fullStars && hasHalfStar) {
                  return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="text-yellow-400" />;
                } else {
                  return <FontAwesomeIcon key={index} icon={faStar} className="text-gray-500" />;
                }
              })}
            </div>
              <span className=" text-gray-500 text-sm">({product.rating.count} reviews)</span>
            </div>
        </div>

      </div>
  );
};

export default ProductDetails;
