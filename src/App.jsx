import React from "react";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

export const config = {
  endpoint:`http://127.0.0.1:8082`
}
const App = () => {
  return (
    <div className="w-full h-screen bg-[#030303] ">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
};

export default App;
