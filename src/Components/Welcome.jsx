import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-[#030303] w-full h-screen text-white flex flex-col justify-center items-center gap-4">
      <h1 className="text-[30px]">CRED Welcomes You</h1>
      <Link to="/login">
        <button className="text-[20px] border-2 px-4 cursor-pointer">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="text-[20px] border-2 px-4 cursor-pointer">
          SignUp
        </button>
      </Link>
    </section>
  );
};

export default Welcome;
