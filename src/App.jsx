import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";     
import ServiceCard from "./Components/ServiceCard";

const App = () => {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route element={<ServiceCard />}>
          <Route path="/" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;