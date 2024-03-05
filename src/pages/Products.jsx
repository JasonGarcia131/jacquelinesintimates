import React from "react";
import { Data } from "../Data";
import { useParams, Link } from "react-router-dom";
import { Product } from "../components/Product";
import { IoMdArrowBack } from "react-icons/io";

export const Products = () => {
  const { category } = useParams();

  const data = Data.map((item, index) =>
    item.category === category ? <Product item={item} key={item.id} /> : ""
  );

  return (
    <div>
      <section className="py-32">
        <div className="container mx-auto">
          <div className="w-full flex justify-between mb-10">
            <div className="flex justify-center items-center">
              <Link to={'/'}>
                <IoMdArrowBack className="font-bold text-[26px]" />
              </Link>
            </div>
            <div className="flex-1 text-center">
              <h1 className="uppercase font-semibold text-[26px]">
                Shopping {category}'S
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {data}
          </div>
        </div>
      </section>
    </div>
  );
};
