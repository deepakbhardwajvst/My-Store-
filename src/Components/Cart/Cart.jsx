import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

export const Cart = ({ openModel, setOpen }) => {
  const cartState = useSelector((state) => state.cart);
  const totalAmount = cartState.totalAmount;
  const dispatch = useDispatch();

  return (
    <div>
      {cartState.cart.length > 0 ? (
        <Fragment>
          <Dialog
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="border-0 outline-0"
          >
            <DialogHeader className="font-bold text-4xl font-inter">
              Cart
            </DialogHeader>
            <DialogBody className="flex flex-col justify-center items-start">
              {cartState.cart.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 p-4">
                      <div className=" justify-content-center ">
                        <img
                          className="h-[125px] rounded-md"
                          src={product.img}
                        ></img>
                        <div className="flex flex-col justify-center items-start">
                          <h4 className=" text-black text-xl font-inter font-bold tracking-normal leading-none py-4 ">
                            {product.name}
                          </h4>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className=" text-black text-base font-inter tracking-normal leading-none px-4 py-1 ">
                            Selected size{" "}
                            <span className="ml-2">{product.size}</span>
                          </p>
                          <p className=" text-black text-base font-inter tracking-normal leading-none px-4 py-1 ">
                            Selected color{" "}
                            <span
                              className="ml-2 rounded-full px-2"
                              style={{ background: product.color }}
                            ></span>
                          </p>
                          <p className=" text-black text-base font-inter tracking-normal leading-none px-4 py-1 ">
                            Amount{" "}
                            <span className="ml-2">{product.amount}</span>
                          </p>
                          <p className=" text-black text-base font-inter tracking-normal leading-none px-4 py-1 ">
                            Sigle item price{" "}
                            <span className="ml-2">₹ {product.price}</span>
                          </p>
                          <p className=" text-black text-base font-inter tracking-normal leading-none px-4 py-1 ">
                            Total item price{" "}
                            <span className="ml-2">₹ {product.totalPrice}</span>
                          </p>
                        </div>
                        <div className="p-4">
                          <Tooltip
                            content="Remove from the cart"
                            placement="bottom"
                          >
                            <Button
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                              onClick={() => dispatch(removeFromCart(product))}
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className=" text-black text-base font-inter tracking-normal leading-none p-4 ">
                {" "}
                Total price of all products{" "}
                <span> ₹ {cartState.totalPrice}</span>
              </p>
              <p className="text-center justify-self-center">click and hold on outside the white-box to close the pop-up</p>
            </DialogFooter>
          </Dialog>
      </Fragment>
      ) : (
        <Fragment>
          <Dialog
            open={openModel}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="border-0 outline-0"
          >
            <DialogHeader className="justify-center font-bold text-4xl font-inter">
              Cart
            </DialogHeader>
            <DialogBody>
              <h1 className=" text-black text-3xl font-inter font-bold tracking-normal leading-none py-4 ">
                Your body is empty
              </h1>
              <p className=" text-black text-base font-inter tracking-normal leading-none">
                Add some products
              </p>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};
