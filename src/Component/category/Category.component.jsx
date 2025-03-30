import React, { useContext, useEffect, useState } from "react";
import { categoriesContext } from "../../context/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(categoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap[category]) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]); // Dependency array includes category and categoriesMap

  return (
    <>
      <h1 className="text-center mb-8 capitalize text-4xl font-semibold text-gray-700 tracking-wide">
        {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500 italic">
            No products found 😞
          </p>
        )}
      </div>
    </>
  );
};

export default Category;
