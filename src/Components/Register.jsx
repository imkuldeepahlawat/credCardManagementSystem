import Navbar from "./Navbar";
import {  Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#030303] w-full text-white flex justify-between items-center flex-col p-4">
      <Navbar/>
      <div className="border border-2 border-[#4FFE9B] rounded-md  flex flex-col gap-4 p-20 ">
        <h2 className="text-center text-[30px] font-semibold">Register</h2>
        <form action="" className="flex flex-col gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
          />
          <button className="text-black bg-white text-[20px]  rounded-full p-2 font-bold">
            Register
          </button>
        </form>
        <p>Already have an account?
        {" "}
        <Link to="/login" className="text-[#4FFE9B]">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
