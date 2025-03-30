import { useContext } from "react";
import { cartContext } from "../../context/cart.context";
import Button from "../Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(cartContext);

  return (
    <div className="w-full flex flex-col h-[350px] items-center  relative group">
      <div className="relative w-full h-[95%]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover mb-[5px] group-hover:opacity-80 transition-opacity"
        />
        <Button onClick={() => addItemToCart(product)} buttontype="inverted">
          Add to cart
        </Button>
      </div>
      <div className="w-full h-[5%] pt-2 flex justify-between text-sm">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className=""> ${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
