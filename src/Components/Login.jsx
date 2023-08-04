import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-[#030303]  w-full h-[100%] text-white flex mx-auto -mb-[60px]  items-center flex-col p-4">
      <Navbar />
      <div className="border border-2 rounded-md  flex flex-col gap-4 p-20 ">
        <h2 className="text-center text-[30px] font-semibold">Login</h2>
        <form action="" className="flex flex-col gap-4 ">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="bg-[#030303] outline-none border-b-2 border-[#4FFE9B] text-[20px] p-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#030303] outline-none border-b-2 border-[#4FFE9B] text-[20px] p-2"
          />

          <button className="text-black bg-white text-[20px]  rounded-full p-2 font-bold">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#4FFE9B]">
            Sign Up
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Login;
