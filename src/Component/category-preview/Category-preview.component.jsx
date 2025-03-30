import React, { useContext } from "react";
import { categoriesContext } from "../../context/categories.context";
import ProductCard from "../product-card/product-card.component";
import { userContext } from "../../context/user.context";

const CategoryPreview = () => {
  const { categoriesMap } = useContext(categoriesContext);
  const { navigateTo } = useContext(userContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div className="flex flex-col mb-8 space-y-3">
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <span className="text-2xl font-bold cursor-pointer transition-colors duration-300 hover:text-blue-500">
                {title.toUpperCase()}
              </span>
              <span
                onClick={() => navigateTo(`/shop/${title}`)}
                className="text-xs font-medium cursor-pointer text-gray-600 transition-transform duration-300 hover:text-blue-500 hover:scale-105"
              >
                View More →
              </span>
            </div>

            <div className="grid grid-cols-4 gap-x-5 gap-y-5 mb-10">
              {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryPreview;
