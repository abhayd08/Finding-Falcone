import HelpIcon from "@mui/icons-material/Help";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ component }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
      navigate(path);
  };

  return (
    <div className="header">
      <a href="/">
        <div
          className={`header-title ${
            component === "Galaxy" ? "header-title-galaxy" : ""
          }`}
        >
          Geektrust
        </div>
      </a>
      <div id="nav-menu">
        {component === "Introduction" ? (
          <>
            <div
              className={`nav-btn ${
                component === "Galaxy" ? "nav-btn-galaxy" : ""
              }`}
              onClick={() => {
                handleNavigation("/galaxy");
              }}
            >
              <TravelExploreIcon /> Galaxy
            </div>
            <a
              href="https://www.geektrust.com"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`nav-btn ${
                  component === "Galaxy" ? "nav-btn-galaxy" : ""
                }`}
              >
                Home
              </div>
            </a>
          </>
        ) : component === "Galaxy" || component === "Result" ? (
          <>
            <div
              className={`nav-btn ${
                component === "Galaxy" ? "nav-btn-galaxy" : ""
              }`}
              onClick={() => {
                handleNavigation("/");
              }}
            >
              <HelpIcon /> Introduction
            </div>
            <a
              href="https://www.geektrust.com"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={`nav-btn ${
                  component === "Galaxy" ? "nav-btn-galaxy" : ""
                }`}
              >
                Home
              </div>
            </a>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
