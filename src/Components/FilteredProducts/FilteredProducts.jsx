import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect } from "react";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

export const FilteredProducts = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const products = useSelector((state) => state.products.filteredProducts);
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-pink-50 ">
      <div className="p-10">
        <div className="py-8 mb-2 flex justify-center ">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <NavigationButtons />
        <div className="grid grid-cols-1 justify-items-center py-8 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                  text={product.text}
                  colors={product.color}
                  type={product.type}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
