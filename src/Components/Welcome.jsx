import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Welcome = () => {
  return (
    <section className="bg-[#030303] w-full h-full  text-white flex flex-col justify-center items-center justify-between">
      <Navbar hasHiddenAuthButtons={true} />
      <img
        src={logo}
        alt="background image"
        
        className="absolute w-[450px] h-[550px] left-50 opacity-50 blur-md z-10"
      />
      <div className="flex flex-col justify-center items-center gap-4 z-40">
        <h1 className="text-[140px] font-[900] text-center ">
          rewards for paying credit card bills.
        </h1>
        <div className="">
         
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Welcome;
