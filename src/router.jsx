import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../src/navbar/navbar";
//import Footer from "../src/footer/footer";
import CaseComponent from "../src/case/casehome";
import Home from "../src/home/home";
import Solutions from "../src/solutions/solutions";
import About from "../src/about/about";
import Contact from "../src/contact/contact";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/home" element={<Home  />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/cases" element={<CaseComponent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact  />} />
                </Routes>
        </BrowserRouter>
    );
};
export default RouterComponent;