import { Outlet } from "react-router"
import Navbal from "./Components/Navbal"
import Footer from "./Components/Footer"


const Cleaner = () => {
    return (
        <div>
            <Navbal />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Cleaner;