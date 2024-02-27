import logo from "../../assets/images/header.png";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
          Welcome to SilkVoyage!
        </h3>
      </div>
      <div className="flex  justify-between items-center">
      <Link to="/" >
          <img className="h-28 w-full" src={logo} alt="store"></img>
        </Link>
        <div className="flex flex-row items-center">
          {/* <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-black font-inter text-base font-medium tracking-normal leading-none text-center mr-2 mt-1">
              Whish List
            </p>
          </div> */}
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => handleOpen()}
          >
            {totalAmount ? (
              <span className=" bg-gray-100 rounded-full px-2 font-inter text-sm font-bold mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}
            <p className="text-black font-inter text-base font-medium tracking-normal leading-none text-center mr-2 mt-1">
              Shopping Bag
            </p>
            <div>
              <Cart openModel={open} setOpen={setOpen} />{" "}
            </div>
          </div>
          <div >
            <Link to="/" className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <p className="text-black font-inter text-base font-medium tracking-normal leading-none text-center mr-2 mt-1">
              Home
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-row w-full p-4 justify-around">
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          {" "}
          50% OFF
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          {" "}
          Free shipping and returns
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
          {" "}
          Different payment methods
        </div>
      </div>
    </>
  );
};
