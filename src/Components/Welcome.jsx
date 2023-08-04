import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-[#030303] w-full h-screen text-white flex flex-col justify-center items-center">
      <img
        src={logo}
        alt="background image"
        className="absolute w-[450px] h-[550px] left-50 opacity-50 blur-md z-10"
      />
      <div className="flex flex-col justify-center items-center gap-4 z-40">
        <h1 className="text-[30px] ">CRED Welcomes You</h1>
        <Link to="/login">
          <button className="text-[25px] text-black rounded-full font-bold  bg-white border-2 px-4 cursor-pointer">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-[25px] text-black rounded-full font-bold  bg-white border-2 px-4 cursor-pointer">
            SignUp
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
