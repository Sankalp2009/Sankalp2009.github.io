/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from ".././Pages/Project";
import Skills from "../Pages/Skills";
function Allroutes(){
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#about"element={<About />} />
        <Route path="#skill"element={<Skills />} />
        <Route path="#project" element={<Project />} />
        <Route path="#contact" element={<Contact />} />
    </Routes>
    )
}
export default Allroutes;