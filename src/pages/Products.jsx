import React, { useEffect, useState } from "react";
import { getData } from "../ContextApi/DataContext"; // consider renaming to useData
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/Animation - 1751896669373.json";
import loading from "../assets/Animation - 1751897589261.json";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [range, setRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  const { data, fetchingAllData } = getData(); // rename to useData() if it's a hook

  useEffect(() => {
    fetchingAllData();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= range[0] &&
      item.price <= range[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 9);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              setRange={setRange}
              range={range}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
            />
            {filteredData?.length > 0 ? (
              <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-3 gap-7 mt-10">
                  {filteredData
                    .slice(page * 9 - 9, page * 9)
                    .map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                </div>
                <Pagination
                  handlePage={handlePage}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center md:h-[600px] w-full mt-10">
                <Lottie animationData={notfound} className="w-[500px]" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen w-full">
            <Lottie animationData={loading} className="w-[500px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
