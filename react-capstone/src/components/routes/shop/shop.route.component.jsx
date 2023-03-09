import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.route.component";
import Category from "../category/category.route.component";

// import "./shop.styles.jsx";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
