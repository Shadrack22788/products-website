import { BrowserRouter,Router,Routes,Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
