import React, { useEffect } from "react";
import { getData } from "../ContextApi/DataContext";
import { useNavigate } from "react-router-dom";

function Category() {
  const { data } = getData();
  const navigate = useNavigate();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((element) => {
      return element[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <>
      <div className="bg-[#101829] ">
        <div className=" max-w-7xl py-5 px-4 gap-4 m-auto flex flex-wrap items-center justify-center">
          {categoryOnlyData?.map((item, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => navigate(`category/${item}`)}
                  className=" bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-md py-1 px-3 cursor-pointer"
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
