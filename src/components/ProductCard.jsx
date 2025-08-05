import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../ContextApi/CartContext";
function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, addCart } = useCart();
  console.log(addCart);
  return (
    <div className="relative border-gray-100 rounded-2xl cursor-pointer transition-all p-2 group duration-300 overflow-hidden">
      {/* Image wrapper */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt=""
          onClick={() => navigate(`/products/${product.id}`)}
          className="bg-gray-100 aspect-square transition-transform duration-300 group-hover:scale-110 w-full"
        />
      </div>

      <h1 className="font-semibold line-clamp-2 p-1">{product.title}</h1>
      <p className="font-bold my-1 text-lg text-gray-800">${product.price}</p>

      <button
        className="bg-red-500 px-3 py-2 text-lg rounded-md w-full cursor-pointer flex gap-2 items-center justify-center font-semibold text-white"
        onClick={() => addToCart(product)}
      >
        <IoCartOutline className="h-6 w-6" />
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
