import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const values = { products };
  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};
