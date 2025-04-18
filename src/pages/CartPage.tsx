import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { updateCart, deleteFromCart } from "../redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const handleIncrease = (productId: number, currentQuantity: number) => {
    dispatch(updateCart({ productId, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (productId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateCart({ productId, quantity: currentQuantity - 1 }));
    }
  };

  const handleDelete = (productId: number) => {
    dispatch(deleteFromCart(productId));
  };

  return (
    <div className="container mx-auto p-4  ">
      <h2 className="text-2xl text-blue-500 font-semibold mb-4"><FontAwesomeIcon icon={faCartArrowDown}/> Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-xl text-gray-700 ">Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.productId} className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-10 border-b border-gray-400 py-4">
              <div className="border border-blue-300 p-4 rounded w-36 h-40">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex justify-between ">
                <div className="">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-red-600">{item.price}$</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => handleIncrease(item.productId, item.quantity)} 
                            className="bg-green-500 text-white p-2 rounded cursor-pointer hover:scale-105 transition-all duration-300">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleDecrease(item.productId, item.quantity)} 
                            className="bg-gray-200 p-2 rounded cursor-pointer hover:scale-105 transition-all duration-300">
                    <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                  <p className="mt-2 font-semibold">Total: <span className="text-red-600 font-medium" >{(item.price * item.quantity).toFixed(2)}$</span></p>
                </div>
                <button onClick={() => handleDelete(item.productId)} 
                      className="text-red-500 text-xl cursor-pointer hover:scale-125 transition-all duration-300">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
               
              </div>
            </div>
          ))}
          <div className="border border-blue-400 p-4 mt-5 rounded-lg">
            <h3 className="font-semibold text-xl text-blue-500 mb-4">Order Summary</h3>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <p >Subtotal: {totalPrice.toFixed(2)}$ </p>
              <p>Shipping Cost: 0$</p>
              <p>Discount: 0$</p>
            </div>
            <p className="font-semibold text-lg mt-4">Total:  
              <span className="text-red-600 font-medium"> {totalPrice.toFixed(2)}$</span></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
