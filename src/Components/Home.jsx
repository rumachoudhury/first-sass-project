import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import FeaturedProducts from "./FeaturedProducts";
import LatestProduct from "./LatestProduct";
import TrendyProduct from "./TrendyProduct";
import BeautyProduct from "./BeautyProduct";
import ProductGallery from "./ProductGallery";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProducts />
      <LatestProduct />
      <TrendyProduct />
      <BeautyProduct />
      <ProductGallery />
      <Footer />
      {/* <h1>Welcome to the Home Page</h1> */}
    </div>
  );
};

export default Home;
