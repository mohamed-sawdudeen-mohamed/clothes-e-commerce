import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by</p>
            <select name="" id="" className="ml-3 border-2 border-silver ">
              <option value="" selected disabled>
                Size
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>

            <select name="" id="" className="ml-3 border-2 border-silver ">
              <option value="" selected disabled>
                Color
              </option>
              <option value="">Red</option>
              <option value="">Blue</option>
              <option value="">Yellow</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select name="" id="" className="ml-3 border-2 border-silver ">
              <option value="">Newset (first)</option>
              <option value="">Oldest (first)</option>
              <option value="">Price (Asc)</option>
              <option value="">Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
