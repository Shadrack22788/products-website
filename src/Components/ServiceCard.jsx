import Footer from "./Footer"
import Navbal from "./Navbal"
import { Outlet } from "react-router-dom"

const ServiceCard = () => {
  return (
    <div>
      <Navbal />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ServiceCard