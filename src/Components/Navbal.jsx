
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbal = () => {
  return (
    <nav className="flex justify-between items-center py-2 w-3/4 mx-auto ">

      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className=" flex gap-5">
        <Link to="/">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbal;