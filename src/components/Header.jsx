import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Activites header style when scrolling.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } bg-pink-200 fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link>
          <div>
            <p className="font-primary text-[24px] font-semibold">Jacqueline's Intimates</p>
          </div>
        </Link>

        <div className="md:hidden">
          <FaAlignJustify onClick={() => setDropMenu(true)} />
        </div>
        
        <div className="hidden md:flex md:block md:justify-between md:w-[30%] xl:mr-28">
          <Link to={"/products/bra"} className="font-semibold hover:font-bold">Bras</Link>
          <Link to={"/products/underwear"} className="font-semibold hover:font-bold">Underwear</Link>
          <Link to={""} className="font-semibold hover:font-bold">Link</Link>
        </div>

        <div
          className={`${
            dropMenu ? "right-0" : "-right-full"
          } w-full bg-white/75 fixed top-0 h-full shadow-2xl md:h-[35vh] xl:max-h-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
        >
          <div className="absolute right-0 px-10 py-6">
            <IoMdClose onClick={() => setDropMenu(false)} />
          </div>
          <div className="h-full flex flex-col justify-around items-center font-semibold text-[36px]">
            <Link to={"/products/bra"} className="hover:text-[46px]">Bras</Link>
            <Link to={"/products/underwear"} className="hover:text-[46px]">Underwear</Link>
            <Link to={""} className="hover:text-[46px]">nuber 2</Link>
          </div>
        </div>
        {/* <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
        {itemAmount}
      </div>
      </div> */}
      </div>
    </header>
  );
};
