import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../ContextApi/CartContext";

function ProductListView({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 rounded-md mt-2 ">
      <div className="bg-gray-100 flex gap-7 items-center rounded-md p-2  my-8 ">
        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/products/${product.id}`)}
          className="h-60 w-60 rounded-md cursor-pointer"
        />
        <div className="space-y-2">
          <h1 className="font-bold text-2xl line-clamp-3 hover:text-rose-300 w-full transition-all">
            {" "}
            {product.title}{" "}
          </h1>
          <p className="font-semibold flex items-center text-lg gap-1 ">
            {" "}
            <span className="text-4xl"> {product.price} </span>{" "}
            {product.discount}
            {" %off"}
          </p>
          <p>
            FREE Delivery <span className="font-semibold">Fri,9 oCt </span>
            <br /> or fastest Delivery{" "}
            <span className="font-semibold">Tomorrow , 10 oCt</span>
          </p>
          <button
            className="bg-red-500 rounded-md cursor-pointer px-3 py-2 text-white"
            onClick={() => addToCart(product)}
          >
            {"Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListView;
