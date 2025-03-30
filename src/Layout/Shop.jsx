import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../Component/category-preview/Category-preview.component";
import Category from "../Component/Category/Category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
