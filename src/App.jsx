import { useState } from "react";
import viteLogo from "/vite.svg";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import UsingAxios from "./Components/UsingAxios";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Home />
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Routes> */}
      {/* <Route path="/axios" element={<UsingAxios />} /> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="navbar" element={<Navbar />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
