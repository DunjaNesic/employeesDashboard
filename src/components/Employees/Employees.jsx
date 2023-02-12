import React from "react";
import data from "../../data/employees.json";
import "./employees.scss";
import { FaUserCircle } from "react-icons/fa";

const Employees = (props) => {
  return (
    <ul className={`employee-card ${props.tema}`}>
      {data.employees
        .sort((a, b) => (a.yearOfEmployment >= b.yearOfEmployment ? 1 : -1))
        .map((user, index) => (
          <li className="card" key={index}>
            <div className="employeeName">
              <FaUserCircle size="3rem" />
              <h1 className="userName">{user.name + " " + user.surname}</h1>
            </div>
            <div className="companyName flex">
              <h1>Company</h1>
              <p>{user.company}</p>
            </div>
            <div className="positionName flex">
              <h1>Position</h1>
              <p>{user.position}</p>
            </div>
            <div className="employment flex">
              <h1>Year Of Employment</h1>
              <p>{user.yearOfEmployment}</p>
            </div>
            <div className="contact flex">
              <h1>Contact</h1>
              <p>{user["e-mail"]}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Employees;
