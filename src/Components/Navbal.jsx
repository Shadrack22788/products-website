
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbal = () => {
  return (
    <nav >
      <div  className=" flex space-x-4 md:justify-between items-center py-2 md:w-3/4 mx-auto">
  <div className="px-8">
        <img className="h-8 w-14 md:w-34 md:h-24" src={Logo} alt="logo" />
      </div>
      <div className=" flex gap-5">
        <Link className="md:text-blue-400" to="/">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </div>
    
    </nav>
  );
};

export default Navbal;