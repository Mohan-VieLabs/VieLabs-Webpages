/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeClassname = ({ isActive }) => {
    console.log(isActive);
    return isActive ? "active" : "";
  };
  return (
    <>
      <div className="main-footer">
        <div className="icons_div">
          <div className="company_logo">
            <img
              className="image"
              src="https://static.wixstatic.com/media/2fa4b5_35e74725b0334755b126a1de4a155355~mv2.png/v1/crop/x_254,y_165,w_368,h_184/fill/w_146,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vie.png"
              alt="image1"
            />
          </div>
          <div className="social_med">
            <div className="test insta">
              <a
                className="a_link"
                href="https://www.instagram.com/labs_vie/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div className="test twit">
              <a
                className="a_link"
                href="https://twitter.com/labs_vie"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
            <div className="test Linked">
              <a
                className="a_link"
                href="https://www.linkedin.com/company/vie-labs-private-limited/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
          </div>
        </div>
        <b>
          <div className="lef">
            <div className="col">
              <NavLink className={"a_link " + activeClassname} to={"/home"}>
                Home
              </NavLink>
            </div>

            <div className="col">
              <NavLink className={"a_link " + activeClassname} to="/projects">
                Projects
              </NavLink>
            </div>

            <div className="col">
              <NavLink className={"a_link " + activeClassname} to="/careers">
                Career
              </NavLink>
            </div>
            <div className="col">
              <NavLink className={"a_link " + activeClassname} to="/downloads">
                Downloads
              </NavLink>
            </div>
            <div className="col">
              <NavLink className={"a_link " + activeClassname} to="/aboutus">
                About Us
              </NavLink>
            </div>
          </div>
        </b>
        <div className="righ">
          <div className="col2">
            <a className="a_link">Internship Application</a>
          </div>
          <div className="col2">
            <a className="a_link">Right to Information</a>
          </div>
          <div className="col2">
            <a className="a_link">Recent Office Orders</a>
          </div>
          <div className="col2">
            <a className="a_link">Mail VIE LABS</a>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
      </div>
      <div className="cul">Copyright VieLabs {new Date().getFullYear()}</div>
    </>
  );
};
export default Footer;
