import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-[#030303] h-[100px] w-full p-4">
      <div className="flex justify-between items-center">
        <Link className="cursor-pointer" to="/">
          <img src={logo} alt="logo" className="w-12" />
        </Link>
        <ul className="text-white flex justify-between">
          <li className="p-4 font-bold text-[20px]">Login</li>
          <li className="p-4 font-bold text-[20px]">SignUp</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
