import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

export const SingleProduct = () => {
  const product = useSelector((state) => state.products.filteredSingleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect (() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10 mob:py-4 mob:flex-col">
              <div className=" flex justify-center grow-[4]">
                <img
                  className="h-[500px] rounded-lg "
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[4]">
                <div className="max-w-lg mob:text-center mx-5">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex flex-row justify-around">
                    <p className="flex-1 mb-0 text-black text-xl font-inter font-bold pt-7 tracking-normal leading-none pb-0">
                      Price : ₹{item.price}
                    </p>
                    <Tooltip content="Add to Cart" placement="bottom">
                      <Button
                        color="gray"
                        size="lg"
                        variant="outlined"
                        ripple={true}
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: item.id,
                              name: item.name,
                              size: size,
                              price: item.price,
                              amount: 1,
                              totalPrice: item.price,
                              color: color,
                              img: item.img,
                            })
                          );
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
