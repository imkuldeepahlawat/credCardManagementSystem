import React from "react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <nav className="bg-[#030303] h-[100px] w-full p-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="w-12" />
        <ul className="text-white flex justify-between">
            <li className="p-4 font-bold text-[20px]" >Login</li>
            <li className="p-4 font-bold text-[20px]" >SignUp</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
