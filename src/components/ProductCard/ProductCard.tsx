import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: { rate: number };
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
        price: product.price,
        title: product.title,
        image: product.image,
      })
    );
  };

  return (
    <div className="p-3 rounded-md flex flex-col gap-3 shadow-lg bg-white">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 mx-auto hover:scale-110 transition-all duration-300"
        />
      </div>
      <div>
        <p className="font-bold line-clamp-1">{product.title}</p>
        <span className="text-sm font-medium text-blue-950"> {product.category}</span>
        <span className="flex items-center gap-1 text-yellow-500 font-medium">
        {product.rating.rate} <FontAwesomeIcon icon={faStar} />
        </span>
        <p className="font-semibold"><span className="text-red-600">{product.price}$</span></p>
      </div>
   
      <div className="text-blue-500 py-2 flex items-center justify-center gap-3 border-t border-gray-200 text-xl">
        <Link to={`/product/${product.id}`} className="hover:scale-110 transition-all duration-300">
          <FontAwesomeIcon icon={faEye} />
        </Link>
        <button className="cursor-pointer hover:scale-110 transition-all duration-300" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
