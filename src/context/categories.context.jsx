import { createContext, useEffect, useState } from "react";
import { SHOP_DATA } from "../../shop-data";
import {
  addCollectionandDocument,
  getCategoriesAndDocument,
} from "../utils/firebase/firebase.utils";

export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setcategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
