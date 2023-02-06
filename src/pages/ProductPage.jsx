import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img w-[70%] h-[70%] rounded-lg
            shadow-lg hover:scale-[1.1] ease-in duration-300"
            alt="product_image"
          />
        </div>
        <div
          className="flex-[1.3] flex items-start justify-items-start
        flex-col mt-10"
        >
          <h1 className="title text-[40px]">Creamy Hoody Cotton</h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            veniam nobis, minus neque, ipsam autem officia, eum sit voluptates
            voluptatibus dolorem. Et obcaecati fugit saepe ipsa explicabo enim
            dignissimos omnis.
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>Rs. 1500</b>
          </p>
          <div className="flex text-2xl mt-7">
            Colors
            <div
              className="bg-red-600 w-[2rem] h-[2rem] rounded-full
            p-[10px] border-2 cursor-pointer ml-5 hover:border-[#8a4af3]"
            ></div>
            <div
              className="bg-blue-600 w-[2rem] h-[2rem] rounded-full
            p-[10px] border-2 cursor-pointer ml-5 hover:border-[#8a4af3]"
            ></div>
            <div
              className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full
            p-[10px] border-2 cursor-pointer ml-5 hover:border-[#8a4af3]"
            ></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select name="" id="" className="ml-5 border-2">
              <option value="" selected disabled>
                Select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="mt-7">
            <Counter />
          </div>
          <button className="btn mt-7">Add to cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
