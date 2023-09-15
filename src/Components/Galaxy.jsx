import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Stack, Typography, Button } from "@mui/material";
import { DotWave } from "@uiball/loaders";
import Header from "./Header";
import Planets from "./Planets";
import Footer from "./Footer";
import "./Galaxy.css";

function Galaxy() {
  const { enqueueSnackbar } = useSnackbar();
  const [planetsData, setPlanetsData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState(false);
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [planetCurrentlySelected, setPlanetCurrentlySelected] = useState("");
  const [totalTimeToBeTaken, setTotalTimeToBeTaken] = useState(0);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [btnLoadingContent, setBtnLoadingContent] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Find Queen Falcone!";
    localStorage.clear();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://findfalcone.geektrust.com/planets"
        );
        setPlanetsData(response.data);
        setPageLoading(false);
        setError(null);
      } catch (error) {
        setError("There's an error loading the available planets. 🥺");
        setPageLoading(false);
        console.log(error);
      }
    })();
  }, [enqueueSnackbar]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://findfalcone.geektrust.com/vehicles"
        );
        setVehiclesData(response.data);
      } catch (error) {
        enqueueSnackbar("There's an error loading the available vehicles.", {
          variant: "error",
        });
        console.log(error);
      }
    })();
  }, [enqueueSnackbar]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "https://findfalcone.geektrust.com/token",
          {},
          { headers: { Accept: "application/json" } }
        );
        setToken(response.data.token);
      } catch (error) {
        enqueueSnackbar(
          "There's an error getting the token. Please reload the page.",
          { variant: "error" }
        );
        console.log(error);
      }
    })();
  }, [enqueueSnackbar]);

  const fetchResult = async (
    token,
    selectedPlanets,
    selectedVehicles,
    totalTimeToBeTaken
  ) => {
    try {
      const response = await axios.post(
        "https://findfalcone.geektrust.com/find",
        {
          token: token,
          planet_names: [...selectedPlanets],
          vehicle_names: [...selectedVehicles],
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status === "success") {
        localStorage.setItem("isPlanetFound", "success");
        localStorage.setItem("planet_name", response.data["planet_name"]);
        localStorage.setItem("timeTaken", totalTimeToBeTaken);
      } else if (
        response.data.status === "false" ||
        response.data.status === false
      ) {
        localStorage.setItem("isPlanetFound", false);
      }
    } catch (error) {
      enqueueSnackbar(error.response.data, { variant: "error" });
      navigate("/galaxy");
      console.log(error);
    }
  };

  const validateRangeAndVehicleAvailability = (planetName, vehicleName) => {
    let planetDistance = null;
    let vehicleRange = null;
    let availableVehicleUnits = null;

    planetsData.map((planetData) => {
      if (planetData.name === planetName) {
        planetDistance = planetData.distance;
      }
      return null;
    });

    vehiclesData.map((vehicleData) => {
      if (vehicleData.name === vehicleName) {
        vehicleRange = vehicleData["max_distance"];
        availableVehicleUnits = vehicleData["total_no"];
      }
      return null;
    });

    if (vehicleRange >= planetDistance) {
      if (availableVehicleUnits > 0) {
        setPlanetCurrentlySelected("");
        return true;
      } else {
        enqueueSnackbar(
          `${vehicleName} is unavailable. Try selecting another vehicle.`,
          { variant: "warning" }
        );
        return false;
      }
    } else {
      enqueueSnackbar(
        `Range of ${vehicleName} is not enough to reach this planet. Try selecting another vehicle.`,
        { variant: "warning" }
      );
      return false;
    }
  };

  const calculateTimeToBeTaken = (planetName, vehicleName, reduce) => {
    let planetDistance = "";
    let vehicleSpeed = 0;

    planetsData.forEach((planetData) => {
      if (planetData.name === planetName) {
        planetDistance = planetData.distance;
      }
    });

    vehiclesData.forEach((vehicleData) => {
      if (vehicleData.name === vehicleName) {
        vehicleSpeed = vehicleData.speed;
      }
    });

    const timeToBeTaken = planetDistance / vehicleSpeed;
    const updatedTimeToBeTaken = reduce
      ? totalTimeToBeTaken - timeToBeTaken
      : totalTimeToBeTaken + timeToBeTaken;

    setTotalTimeToBeTaken(updatedTimeToBeTaken);
  };

  const handleVehicleClick = (planetName, vehicleName) => {
    if (selectedPlanets.length < 4 && selectedVehicles.length < 4) {
      if (validateRangeAndVehicleAvailability(planetName, vehicleName)) {
        calculateTimeToBeTaken(planetName, vehicleName);
        setSelectedPlanets([...selectedPlanets, planetName]);
        setSelectedVehicles([...selectedVehicles, vehicleName]);
        enqueueSnackbar(`${planetCurrentlySelected} selected`, {
          variant: "success",
        });

        vehiclesData.map((vehicleData) => {
          if (vehicleData.name === vehicleName) {
            vehicleData["total_no"] -= 1;
          }
          return null;
        });
      }
    } else {
      enqueueSnackbar(
        "You have already selected four planets. Try unselecting the previous ones.",
        { variant: "warning" }
      );
    }
  };

  const handlePlanetClick = (planetName) => {
    const index = selectedPlanets.indexOf(planetName);
    const newSelectedPlanets = [...selectedPlanets];
    const newSelectedVehicles = [...selectedVehicles];

    if (index !== -1) {
      const vehicleName = selectedVehicles[index];
      calculateTimeToBeTaken(planetName, vehicleName, true);

      vehiclesData.forEach((vehicleData) => {
        if (vehicleData.name === vehicleName) {
          vehicleData["total_no"] += 1;
        }
      });

      newSelectedPlanets.splice(index, 1);
      newSelectedVehicles.splice(index, 1);

      setSelectedPlanets(newSelectedPlanets);
      setSelectedVehicles(newSelectedVehicles);
    } else if (selectedPlanets.length > 3) {
      enqueueSnackbar(
        "You have already selected four planets. Try unselecting the previous ones.",
        { variant: "warning" }
      );
    }
  };

  const handleStartButtonClick = (event) => {
    event.target.setAttribute("disabled", "");
    setBtnLoadingContent(
      <>
        <span style={{ marginRight: ".5rem" }}>Loading</span>
        <DotWave size={40} speed={1} color="black" />
      </>
    );
    setTimeout(() => {
      setBtnLoadingContent(null);
      event.target.removeAttribute("disabled");
      navigate("/result");
    }, 2000);
  };

  return (
    <div
      id="galaxy-container"
      style={{ backgroundImage: "url(/assets/galaxy.jpg)" }}
    >
      <Header component="Galaxy" />
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ color: "white", minHeight: "100vh" }}
      >
        {pageLoading ? (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <span className="loading">Loading</span>
            <DotWave size={50} speed={1} color="white" />
          </Stack>
        ) : error ? (
          <span className="error">{error}</span>
        ) : (
          <>
            {totalTimeToBeTaken > 0 ? (
              <div id="time-display-section">
                <Typography variant="h6">Time it'll take: </Typography>
                <Typography variant="h5">{`${totalTimeToBeTaken} Hours`}</Typography>
              </div>
            ) : (
              ""
            )}
            <Planets
              planetsData={planetsData}
              vehiclesData={vehiclesData}
              handleVehicleClick={handleVehicleClick}
              selectedPlanets={selectedPlanets}
              handlePlanetClick={handlePlanetClick}
              planetCurrentlySelected={planetCurrentlySelected}
              setPlanetCurrentlySelected={setPlanetCurrentlySelected}
            />
            {selectedPlanets.length === 4 ? (
              <div className="start-section">
                <Button
                  variant="contained"
                  color="success"
                  id="start-btn-galaxy"
                  onClick={(event) => {
                    fetchResult(
                      token,
                      selectedPlanets,
                      selectedVehicles,
                      totalTimeToBeTaken
                    );
                    handleStartButtonClick(event);
                  }}
                >
                  {btnLoadingContent || "Let's Start"}
                </Button>
              </div>
            ) : (
              <Typography className="start-section" variant="h6">
                Select four planets to start the hunt.
              </Typography>
            )}
          </>
        )}
      </Stack>
      <Footer />
    </div>
  );
}

export default Galaxy;
