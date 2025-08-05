import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/Animation - 1751897589261.json";
import BreadCrump from "../components/BreadCrump";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../ContextApi/CartContext";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState("");
  const params = useParams();
  const { addToCart, addCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const originalPrice = Math.round(
    singleProduct.price + (singleProduct.price * singleProduct.discount) / 100
  );

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <BreadCrump title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl object-cover w-full"
              />
            </div>

            {/* product details */}
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-gray-800 md:text-3xl">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {" "}
                {singleProduct?.brand.toUpperCase()}/
                {singleProduct?.category.toUpperCase()}/{" "}
                {singleProduct?.model.toUpperCase()}{" "}
              </div>
              <p className="text-xl text-red-500 font-bold ">
                ${singleProduct.price}{" "}
                <span className="line-through text-gray-700 px-2">
                  ${originalPrice}
                </span>
                <span className="bg-red-500 rounded-md text-white px-3 py-2 ">
                  {" "}
                  {singleProduct.discount}%discounst{" "}
                </span>
              </p>
              <p className="text-gray-600"> {singleProduct.description} </p>

              {/* quantity selector */}

              <div className="flex items-center gap-4">
                {" "}
                Quantity
                <label
                  htmlFor=""
                  className="text-gray-700 text-sm font-medium "
                ></label>
                <input
                  type="number"
                  value={addCart.length}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="bg-red-500 rounded-md px-6 py-2 text-lg flex gap-2 font-semibold text-white cursor-pointer"
                >
                  <IoCartOutline className="w-6 h-6" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-100% w-100%">
          <Lottie animationData={loading} classID="w-[500px]" />
        </div>
      )}
    </>
  );
}

export default SingleProduct;
