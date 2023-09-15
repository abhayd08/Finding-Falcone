import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "./Header";
import IntroPanel from "./IntroPanel";
import PlanetsInfo from "./PlanetsInfo";
import VehiclesInfo from "./VehiclesInfo";
import Footer from "./Footer";
import "./Introduction.css";

function Introduction() {
  useEffect(() => {
    document.title = "Find Queen Falcone!";
    localStorage.clear();
  }, []);

  return (
    <>
      <div id="intro-box-1">
        <Header component="Introduction" />
        <IntroPanel />
        <div id="btn-container-introduction">
          <a href="#planets-info-container">
            <Button variant="text">Want to know about the planets ?</Button>
          </a>
          <a href="#vehicles-info-container">
            <Button variant="text">Want to know about the vehicles ?</Button>
          </a>
        </div>
      </div>
      <div id="intro-box-2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/galaxy">
            <Button className="ready-btn-introduction" variant="contained">
              Ready ?
            </Button>
          </Link>
        </div>
        <PlanetsInfo />
        <VehiclesInfo />
        <Footer />
      </div>
    </>
  );
}

export default Introduction;
