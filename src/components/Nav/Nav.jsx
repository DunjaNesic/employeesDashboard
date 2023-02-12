import React from "react";
import "./nav.scss";
import { DiAndroid } from "react-icons/di";
import { MdOutlineContactPage } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Nav = (props) => {
  return (
    <nav>
      <ul className={`sidenav ${props.tema}`}>
        <li className="first-li">
          <a className="first" href="#">
            Dashboard
          </a>
          <RxDashboard className="ikonica1" size="3rem" />
        </li>
        <li className="second-li">
          <a href="#">Contact</a>
          <MdOutlineContactPage className="ikonica2" size="3rem" />
        </li>
        <li className="third-li">
          <a href="#">Support</a>
          <DiAndroid className="ikonica3" size="3rem" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
