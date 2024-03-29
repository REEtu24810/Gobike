import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import EnquiryForm from "../pages/EnquiryForm";
import BikeListing from "../pages/BikeListing";
import ScootyListing from "../pages/ScootyListing";
import BikeDetails from "../pages/BikeDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/bike/" element={<BikeListing/>}/>
      <Route path="/bike/:slug" element={<BikeDetails/>}/>
      <Route path="/scooty" element={<ScootyListing/>}/>
      {/* <Route path="/blogs" element={<Blog />} /> */}
      {/* <Route path="/blogs/:slug" element={<BlogDetails />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path='/enqury' element={<EnquiryForm/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
