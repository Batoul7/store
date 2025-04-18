import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slice/categoriesSlice";
import { fetchProducts, filterProductsByCategory } from "../../redux/slice/productsSlice";
import { nextPage, prevPage, setPage, setTotalItems } from "../../redux/slice/paginationSlice";
import { RootState, AppDispatch } from "../../redux/store";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  page?: boolean;
}

const HomeProducts: React.FC<Props> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: categories } = useSelector((state: RootState) => state.categories);
  const { filteredItems: products } = useSelector((state: RootState) => state.products);
  const { currentPage, itemsPerPage, totalItems } = useSelector((state: RootState) => state.pagination);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTotalItems(products.length));
  }, [products, dispatch]);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    dispatch(filterProductsByCategory(category));
    dispatch(setPage(1)); 
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section className={`container mx-auto px-5 ${page ? "md:flex gap-10 items-start py-10" : "py-4"}`}>
      {!page && <Title name="Categories" desc="Various products" />}
    
      <div className={`${page ? '' : 'relative w-full'} `}>
      {page && 
      <div className="max-w-full mb-5">
        <h3 className="text-blue-400 font-semibold text-2xl mb-4">Categories & Products</h3>
        <p className="opacity-90">Discover our diverse range of categories and products that meet your needs and suit your taste.</p>
      </div>}
          <div className={`flex gap-2 mb-8 md:items-center md:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide ${page ? "md:flex-col md:max-w-full  md:justify-start " : " "}`}>
            <button 
              onClick={() => handleCategoryClick(null)} 
              className={`${page && 'w-full'} capitalize px-4 py-2 ${selectedCategory === null ? "bg-blue-400 text-white" : "bg-gray-100"}`}
            >
              All
            </button>
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => handleCategoryClick(category)} 
                className={`${page && 'w-full'} capitalize px-4 py-2 ${selectedCategory === category ? "bg-blue-400 text-white" : "bg-gray-100"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center gap-2 ">
          <button onClick={() => dispatch(prevPage())} disabled={currentPage === 1}
                className="cursor-pointer px-4 py-2 bg-gray-200/70 hover:bg-blue-400 text-blue-400 hover:text-white ">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => dispatch(setPage(pageNumber))}
              className={`px-4 py-2 cursor-pointer ${currentPage === pageNumber ? "bg-blue-400 text-white" : "bg-gray-200/70 text-blue-400"}`}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={() => dispatch(nextPage())} disabled={currentPage === totalPages}
                className="cursor-pointer px-4 py-2 bg-gray-200/70 hover:bg-blue-400 text-blue-400 hover:text-white">
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      </div>
    
    </section>
  );
};

export default HomeProducts;
