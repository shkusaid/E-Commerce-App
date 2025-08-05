import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/Animation - 1751897589261.json";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";

function CategoryProduct() {
  const params = useParams();
  const [search, setSearch] = useState([]);
  const category = params.category;
  const navigate = useNavigate();

  const filteredCategory = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    filteredCategory();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {search.length > 0 ? (
        <div className="max-w-6xl mx-auto px-4 mt-10 mb-10">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 px-3 py-2 cursor-pointer text-white rounded-md flex gap-1"
          >
            {" "}
            <ChevronLeft />
            Back
          </button>
          {search.map((product, index) => {
            return <ProductListView key={index} product={product} />;
          })}
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center h-100% w-100%">
            <Lottie animationData={loading} classID="w-[500px]" />
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryProduct;
