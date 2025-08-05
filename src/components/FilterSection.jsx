// import React, { useEffect } from "react";
import { getData } from "../ContextApi/DataContext";

function FilterSection({
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  setRange,
  range,
  handleBrandChange,
  handleCategoryChange,
}) {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-400 text-white p-2 rounded-md border-2 font-semibold"
      />

      {/* category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col mt-3 gap-2">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="gap-2 flex">
              {" "}
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
        {/* brand section */}

        <h1 className="mt-5 font-semibold text-xl">Brand</h1>
        <select
          name=""
          id=""
          value={brand}
          onChange={handleBrandChange}
          className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
        >
          {brandOnlyData.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>

      {/* price range  */}

      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Price Range: ${range[0]} - ${range[1]}
        </label>
        <input
          type="range"
          value={range[1]}
          min={0}
          max={5000}
          onChange={(e) => setRange([range[0], Number(e.target.value)])}
        />
      </div>
      <button
        className="bg-red-500 rounded-md text-white px-3 py-2 mt-5"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSection;
