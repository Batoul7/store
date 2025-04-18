import { faBars, faCartShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NavLinksData } from "../../Data/NavLinks";
import NavItems from "../NavBar/NavItems";

export default function Header() {

  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) { 
           setIsFixed(true); 
        } else {
           setIsFixed(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
    <div className={`bg-blue-400 w-full px-4 sm:px-6 text-white
        ${isFixed ? 'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ' : 'relative'}`}>
      <div className="container mx-auto flex justify-between items-center w-full py-4">
        <h1 className="text-xl md:text-3xl">Online<FontAwesomeIcon icon={faCartShopping} /> Shop</h1>
        
        <div className="relative flex-grow basis-0 mx-6 hidden md:block">
          <input 
            className="text-gray-600 bg-emerald-50 pl-8 p-1.5 w-full outline-none" 
            type="search" 
            placeholder="Search" 
          />
          <FontAwesomeIcon className="text-blue-400 absolute left-1.5 top-1.5 text-xl" icon={faSearch} />
        </div>
        
        <div className="flex gap-4 items-center ml-auto">
          <Link to={"/login"} className="hidden md:block">
            <FontAwesomeIcon icon={faUser} className="mr-1" />Login
          </Link>
          <Link to={"/cart"} className="relative">
            <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          
          <div className="md:hidden text-2xl cursor-pointer"  onClick={() => setActive(prev => !prev)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div className='hidden md:flex justify-center items-center border-t border-blue-200'>
        <NavItems items={NavLinksData} show={setActive} />
      </div>
    </div>
    <div className={`md:hidden py-4 bg-blue-400 text-white transition-transform duration-300 overflow-hidden p-3
      ${active ? 'translate-x-0' : 'translate-x-full'} fixed top-16 z-50 right-0 w-1/2 h-screen border-t border-blue-200`}>
      <div className="relative mb-6">
        <input 
          className="text-gray-600 bg-emerald-50 pl-8 p-1.5 w-full outline-none" 
          type="search" 
          placeholder="Search" 
        />
        <FontAwesomeIcon className="text-blue-400 absolute left-1.5 top-1.5 text-xl" icon={faSearch} />
      </div>
      <NavItems items={NavLinksData} show={setActive} />
   
      <Link to={"/login"} className="block py-2 text-center hover:scale-110 ">
        <FontAwesomeIcon icon={faUser} className="mr-2" /><span>Login</span>
      </Link>
    </div>
    </>
  );
}
