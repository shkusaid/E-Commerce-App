import { createContext, useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // ✅ Fetch data from API once when component mounts
  useEffect(() => {
    fetchingAllData();
  }, []);

  const fetchingAllData = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=150"
      );
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Memoize categories & brands so they're not recalculated every render
  const getUniqueValues = (data, property) => {
    const values = data?.map((item) => item[property]);
    return ["All", ...new Set(values)];
  };

  const categoryOnlyData = useMemo(
    () => getUniqueValues(data, "category"),
    [data]
  );
  const brandOnlyData = useMemo(() => getUniqueValues(data, "brand"), [data]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchingAllData,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// ✅ Custom hook for easy access
export const getData = () => useContext(DataContext);
