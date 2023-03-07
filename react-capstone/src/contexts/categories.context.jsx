import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocs } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocs();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  const values = { categoriesMap };
  return <CategoriesContext.Provider value={values}>{children}</CategoriesContext.Provider>;
};
