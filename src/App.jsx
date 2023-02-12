import "./app.scss";
import Employees from "./components/Employees/Employees";
import Nav from "./components/Nav/Nav";
import Filter from "./components/Filter/Filter";
import React, { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("theme-dark");

  return (
    <div className={`app ${theme}`}>
      <div className="filter">
        <Filter funkcija={setTheme} tema={theme} />;
      </div>
      <div className="nav">
        <Nav funkcija={setTheme} tema={theme} />
      </div>
      <div className="data-screen">
        <Employees funkcija={setTheme} tema={theme} />
      </div>
    </div>
  );
};

export default App;
