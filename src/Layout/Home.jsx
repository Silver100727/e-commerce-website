import React, { useContext } from "react";
import { userContext } from "../context/user.context";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const Home = () => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const CategoryItem = ({ item }) => {
  const { navigateTo } = useContext(userContext);

  return (
    <div
      onClick={() => navigateTo(`/shop/${item.title.toLowerCase()}`)}
      className="min-w-[30%] h-[240px] flex-1 flex items-center justify-center border border-black mx-[7.5px] mb-[15px] overflow-hidden relative group hover:cursor-pointer"
    >
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="absolute h-[90px] px-6 flex flex-col items-center justify-center border border-black bg-white opacity-70 group-hover:opacity-90">
        <h2 className="font-bold text-md text-[#4a4a4a] m-0">{item.title}</h2>
        <p className="font-light text-xs">Shop Now</p>
      </div>
    </div>
  );
};
export default Home;
