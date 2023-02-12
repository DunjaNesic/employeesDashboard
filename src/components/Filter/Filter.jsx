import "./filter.scss";

const Filter = (props) => {
  return (
    <div className={`filter ${props.tema}`}>
      <div className="form-box">
        <div className="button-box">
          <button
            type="button"
            className="toggle-btn dark"
            onClick={() => props.funkcija("theme-dark")}
          >
            Dark theme
          </button>
          <button
            type="button"
            className="toggle-btn light"
            onClick={() => props.funkcija("theme-light")}
          >
            Light theme
          </button>
        </div>
      </div>
      <div className="headers">
        <h2>Employees</h2>
        <div className="two-buttons">
          <button
            className="not-colored"
            onClick={() => alert("It is already sorted in order per years")}
          >
            Sort per year
          </button>
          <button
            className="colored"
            onClick={() => alert("The button is currently not in function")}
          >
            Filter per company
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
