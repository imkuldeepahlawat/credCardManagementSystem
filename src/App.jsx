import React from "react";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-[100vh] bg-[#030303] ">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
