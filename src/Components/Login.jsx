import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { config } from "../App";
import Footer from "./Footer";
const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const validate = (data) => {
    if (data.name === "") {
      enqueueSnackbar("Name is a required field", { variant: "warning" });
      return false;
    } else if (data.password === "") {
      enqueueSnackbar("Password is a required field", { variant: "warning" });
      return false;
    } else if (data.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    }  else {
      return true;
    }
  };
  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    passowrd: "",
    
  });
  const oninputChange = (e) => {
    console.log("change happen", e.target.value);
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const registerProcess = async (formData) => {
    let url = `${config.endpoint}/signup`;
  };
  return (
    <div className="bg-[#030303]  w-full h-full  text-white flex mx-auto  items-center flex-col  justify-between">
      <Navbar hasHiddenAuthButtons={false} />
      <div className="border border-2 rounded-md  flex flex-col gap-4 p-10 my-24">
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

          <button type="submit" className="text-black bg-white text-[20px]  rounded-full p-2 font-bold">
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
      <Footer/>
    </div>
  );
};

export default Login;
