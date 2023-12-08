import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Vegetables from "./Pages/Vegetables";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";
import Swiperr from "./Components/Swiperr";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className=" m-4 border-black border-[1.5px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
