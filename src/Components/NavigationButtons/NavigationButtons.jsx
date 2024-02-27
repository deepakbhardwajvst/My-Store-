import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

export const NavigationButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (

      <div className="flex item-center justify-center py-8 sm:max-w-full flex-wrap gap-2">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
                <Link to={"/filteredProducts/"+button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hove:bg-green-300 duration-300 ease-in-out sm:w-200"
                onClick={() => dispatch(filterProducts(button))}
              >
                {button}
              </Button>
              </Link>
            </div>
          );
        })}
      </div>
  );
};
