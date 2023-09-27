import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Header from "./Header";
import Footer from "./Footer";
import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isPlanetFound, setIsPlanetFound] = useState(false);
  const [planetName, setPlanetName] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);

  const routeToGalaxy = () => {
    navigate("/galaxy");
  };

  useEffect(() => {
    setIsPlanetFound(localStorage.getItem("isPlanetFound"));
    setPlanetName(localStorage.getItem("planet_name"));
    setTimeTaken(localStorage.getItem("timeTaken"));

    if (planetName) {
      document.title = `Planet Found | ${planetName}`;
    } else {
      document.title = "Planet Not Found";
    }
  }, [planetName]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!localStorage.getItem("isPlanetFound")) {
        enqueueSnackbar("You might not have made the search. Start again!", {
          variant: "warning",
        });
        routeToGalaxy();
      }
    }, 2500);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div id="result-container">
      <Header component="Result" />
      <div className="greetings-container">
        {isPlanetFound === "success" ? (
          <>
            <h2 className="greeting">Yay! Planet Found 😃</h2>
            <p className="greeting-text">
              After an exhaustive <strong>{timeTaken} hours</strong> search in{" "}
              <strong>{planetName}</strong>, the elusive queen was ultimately
              located.
            </p>
            <p className="greeting-text">Thanks for your help!</p>
          </>
        ) : (
          <>
            <h2 className="error-text">
              Queen not found in any of the selected planets. 🥺
            </h2>
            <span className="error-text">Try again!</span>
          </>
        )}
        <Button
          variant="contained"
          size="large"
          id="start-btn-result"
          onClick={() => {
            routeToGalaxy();
          }}
        >
          Start again ?
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
