import HelpIcon from "@mui/icons-material/Help";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = ({ component }) => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <a href="https://www.geektrust.com" target="_blank" rel="noreferrer">
        <div
          className={`header-title ${
            component === "Galaxy" ? "header-title-galaxy" : ""
          }`}
        >
          Geektrust
        </div>
      </a>
      <div id="nav-menu">
        {component === "Introduction" || component === "Result" ? (
          <>
            <div
              className={`nav-btn ${
                component === "Galaxy" ? "nav-btn-galaxy" : ""
              }`}
              onClick={() => {
                handleNavigation("/galaxy");
              }}
            >
              <TravelExploreIcon id="galaxy-icon" /> Galaxy
            </div>
            <Link to="/">
              <div
                className={`nav-btn home-btn ${
                  component === "Galaxy" ? "nav-btn-galaxy" : ""
                }`}
              >
                Home
              </div>
            </Link>
          </>
        ) : component === "Galaxy" ? (
          <>
            <div
              className={`nav-btn ${
                component === "Galaxy" ? "nav-btn-galaxy" : ""
              }`}
              onClick={() => {
                handleNavigation("/");
              }}
            >
              <HelpIcon /> Intro
            </div>
            <Link to="/">
              <div
                className={`nav-btn home-btn ${
                  component === "Galaxy" ? "nav-btn-galaxy" : ""
                }`}
              >
                Home
              </div>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
