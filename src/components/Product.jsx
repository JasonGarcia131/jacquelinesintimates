import React, {useContext } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

export const Product = ({ item }) => {

    const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = item;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition rounded-lg">
        <div className="w-full h-full bg-pink-200 flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[250px] group-hover:scale-110 transition duration-300" src={image} alt="product image"/>
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {/* <button onClick={()=>addToCart(item, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              Add
            </div>
          </button> */}
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capatalize text-gray-500 mb-1">
          {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <p className="font-semibold">$ {price}</p>
      </div>
    </div>
  );
};
