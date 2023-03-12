import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.route.component";
import Category from "../category/category.route.component";
import { fetchCategoriesStart } from "../../../store/categories/category.actions";

// import "./shop.styles.jsx";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
