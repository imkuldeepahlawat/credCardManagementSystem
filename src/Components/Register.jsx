import { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { config } from "../App";
import Footer from "./Footer";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [processBar, setProcessBar] = useState(false);
  const navigate = useNavigate();
  const validate = (data) => {
    if (data.name === "") {
      enqueueSnackbar("Name is a required field", { variant: "warning" });
      return false;
    } else if (data.email === "") {
      enqueueSnackbar("Email is a required field", { variant: "warning" });
      return false;
    } else if (!data.email.includes("@") || !data.email.includes(".com")) {
      enqueueSnackbar("email must be valid", { variant: "warning" });
      return false;
    } else if (data.phoneNumber === "") {
      enqueueSnackbar("Phone Number is a required field", {
        variant: "warning",
      });
      return false;
    } else if (data.phoneNumber.length != 10) {
      enqueueSnackbar("Phone Number can be only 10 Numbers", {
        variant: "warning",
      });
      return false;
    } else if (data.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    } else if (data.password !== data.confirmPassword) {
      enqueueSnackbar("Passwords do not match", { variant: "warning" });
      return false;
    } else {
      return true;
    }
  };
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const oninputChange = (e) => {
    console.log("change happen", e.target.value);
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const registerProcess = async (formData) => {
    let url = `http://localhost:8082/cred/user/signup`;
    if (validate(formData)) {
    // if (url) {
      try {
        setProcessBar(true);
        await axios.post(url, formData);
        setProcessBar(false);
        enqueueSnackbar(`Registered Successfully`, { variant: "success" });
        navigate("/login");
      } catch (e) {
        console.log(e);
        if (e.response) {
          enqueueSnackbar(e.response.message, { variant: "error" });
        } else if (e.message) {
          enqueueSnackbar(e.message, { variant: "error" });
        } else {
          enqueueSnackbar(
            `Something went wrong. Check that the backend is running, reachable and returns valid JSON.`,
            { variant: "warning" }
          );
        }
        //  console.log(`error from post req`,e.response.status );
      } finally {
        setProcessBar(false);
        setRegisterData({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
      }
    }
  };
  return (
    <div className="bg-[#030303] w-full  h-full  text-white flex justify-between items-center flex-col">
      <Navbar hasHiddenAuthButtons={false} />
      <div className="border border-2 border-[#4FFE9B] rounded-md  flex flex-col gap-4 p-10">
        <h2 className="text-center text-[30px] font-semibold">Register</h2>
        <div className="flex flex-col gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-[#030303] outline-none border-b-2  text-[20px] "
            value={registerData.name}
            onChange={oninputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
            value={registerData.email}
            onChange={oninputChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
            value={registerData.phoneNumber}
            onChange={oninputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
            value={registerData.passoword}
            onChange={oninputChange}
            required
          />
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-[#030303] outline-none border-b-2 text-[20px]"
            value={registerData.confirmPassword}
            onChange={oninputChange}
            required
          />
          {processBar ? (
            <CircularProgress className="mx-auto" />
          ) : (
            <button
              className="text-black bg-white text-[20px]  rounded-full p-2 font-bold"
              onClick={() => {
                registerProcess(registerData);
              }}
            >
              Register
            </button>
          )}
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-[#4FFE9B]">
            Login here
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
