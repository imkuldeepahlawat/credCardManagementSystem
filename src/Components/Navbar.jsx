
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
const Navbar = ({ hasHiddenAuthButtons }) => {
  return (
    <nav className="bg-[rgb(3,3,3)] h-[20%] w-full px-20 py-10 ">
      {hasHiddenAuthButtons ? (
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-12" />
          <ul className="text-white flex justify-between">
            <Link to="/login">
              <li className="p-4 font-bold text-[20px]">Login</li>
            </Link>
            <Link to="/signup">
              <li className="p-4 font-bold text-[20px]">SignUp</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="flex justify-between items-center py-10">
          <Link className="cursor-pointer" to="/">
            <WestRoundedIcon className=" scale-[2]" />
          </Link>
          <p className="text-[30px] font-semibold">join 9M+ members who win rewards and cashbacks everyday</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
