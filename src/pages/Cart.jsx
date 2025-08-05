import React from "react";
import { useCart } from "../ContextApi/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import Lottie from "lottie-react";
import notfound from "../assets/Animation - 1751896669373.json";
import { useNavigate } from "react-router-dom";
function Cart({ location, getLocation }) {
  const { user } = useUser();
  const navigate = useNavigate();
  // console.log(user);
  console.log(location);
  const { addCart, updateQuantity, deleteItem } = useCart();
  const total = addCart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-5">
      {addCart.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl text-center">
            {"My Cart "}({addCart.length})
          </h1>
          <div>
            <div className="mt-10">
              {addCart.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-center mt-3 w-full"
                  >
                    <div className=" flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div className="">
                        <h1 className="w-[300px] line-clamp-2">
                          {" "}
                          {item.title}{" "}
                        </h1>
                        <p className="text-red-500 font-semibold text-lg">
                          {"$"}
                          {item.price}{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl
                    "
                    >
                      <button
                        onClick={() =>
                          updateQuantity(addCart, item.id, "increase")
                        }
                        className="cursor-pointer"
                      >
                        +
                      </button>
                      <span> {item.quantity} </span>
                      <button
                        onClick={() =>
                          updateQuantity(addCart, item.id, "decrease")
                        }
                        className="cursor-pointer"
                      >
                        -
                      </button>
                    </div>
                    <span
                      onClick={() => deleteItem(item.id)}
                      className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl"
                    >
                      <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer " />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              {" "}
              <button
                onClick={() => navigate("/products")}
                className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
              >
                {" "}
                continue Shopping
              </button>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl text-center">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="p-2 rounded-md"
                    value={user?.fullName}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address </label>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="p-2 rounded-md"
                    value={location?.country}
                  />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">State </label>
                    <input
                      type="text"
                      placeholder="Enter Your State"
                      className="p-2 rounded-md space-y-1 w-full"
                      value={location?.state}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Postal Code </label>
                    <input
                      type="text"
                      placeholder="Enter Your Postal Code"
                      className="p-2 rounded-md w-full"
                      value={location?.postcode}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Country </label>
                    <input
                      type="text"
                      placeholder="Enter Your Country"
                      className="p-2 rounded-md space-y-1 w-full"
                      value={location?.country}
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="">Number</label>
                    <input
                      type="number"
                      placeholder="Enter Your Number"
                      className="p-2 rounded-md w-full"
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white rounded-md px-3 py-2 cursor-pointer mt-3">
                  Submit
                </button>
                <div className="flex justify-center items-center w-full text-gray-700">
                  -------------OR--------------
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={getLocation}
                    className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
                  >
                    Detect My Location
                  </button>
                </div>
              </div>
              <div
                className="h-max bg-white border-gray-100 px-3 space-y-2 mt-4 py-2 shadow-md border
               "
              >
                <h1 className="text-gray-800 font-bold text-xl text-center">
                  Detail Bill
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    {" "}
                    <span>
                      <LuNotebookText />
                    </span>
                    Total Price
                  </h1>
                  <p> ${total} </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    {" "}
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Delivery Charges
                  </h1>
                  <p className="text-red-500 font-semibold">
                    {" "}
                    <span className="text-gray-700 line-through">
                      $25
                    </span> FREE{" "}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    {" "}
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charges
                  </h1>
                  <p className="text-red-500 font-semibold">{" $5 "}</p>
                </div>

                <hr className="text-gray-700 m-2" />
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    {"Grand Total"}
                  </h1>
                  <p className="text-red-500 font-semibold">{`${total + 5}`}</p>
                </div>
                <div>
                  <h1 className="mb-3 mt-7 text-gray-700 font-semibold">
                    Apply For Code
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter Code"
                      className="p-2 rounded-md w-full"
                    />
                    <button className="bg-red-500 rounded-md px-3 py-2 text-white border border-gray-100 cursor-pointer">
                      Apply
                    </button>
                  </div>
                </div>
                <button
                  onClick={getLocation}
                  className="bg-red-500 px-3 py-2 rounded-md text-white mb-7 cursor-pointer mt-3 w-full"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[600px]">
          <h1 className="text-red-500/80 font-bold text-5xl text-muted">
            no dude! Your cart is empty...
          </h1>
          <div className="flex justify-center items-center h-[500px] w-[500px] mt-10">
            <Lottie animationData={notfound} classID="w-[500px]" />
          </div>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer"
          >
            {" "}
            continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
