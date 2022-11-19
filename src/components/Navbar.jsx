import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import VilLabs from "../images/villab.webp";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate()
  const activeClassname = ({ isActive }) => {
    console.log(isActive);
    return isActive ? "active" : "";
  };
  const [showNavbar, setOpenNavbar] = useState(false);

  const toggleNavMenuHandler = () => {
    setOpenNavbar((prev) => !prev);
  };

  return (
    <header>
      <div className="logoContainer">
        <img className="logo" src={VilLabs} alt="logo" onClick={()=>navigate('/home')}  />
      </div>
      <ul className={showNavbar ? "navbar toggle" : "navbar"}>
        <li>
          <NavLink onClick={()=>setOpenNavbar(false)} className={"link " + activeClassname} to={"/home"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={()=>setOpenNavbar(false)} className={"link " + activeClassname} to={"/projects"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink onClick={()=>setOpenNavbar(false)} className={"link " + activeClassname} to={"/careers"}>
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink onClick={()=>setOpenNavbar(false)} className={"link " + activeClassname} to={"/downloads"}>
            Downloads
          </NavLink>
        </li>
        <li>
          <NavLink onClick={()=>setOpenNavbar(false)} className={"link " + activeClassname} to={"/aboutus"}>
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="hamburger-menu">
        {!showNavbar ? (
          <FaBars
            size={20}
            style={{ color: "white" }}
            onClick={toggleNavMenuHandler}
          />
        ) : (
          <FaTimes
            size={20}
            style={{ color: "white" }}
            onClick={toggleNavMenuHandler}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
