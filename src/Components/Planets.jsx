import { useState } from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import Vehicles from "./Vehicles";
import "./Planets.css";

function Planets({
  vehiclesData,
  planetsData,
  handleVehicleClick,
  selectedPlanets,
  handlePlanetClick,
  planetCurrentlySelected,
  setPlanetCurrentlySelected,
}) {
  const [planetHovered, setPlanetHovered] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = (planetName) => {
    setPlanetHovered(planetName);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setPlanetHovered("");
    setIsVisible(false);
  };

  return (
    <Stack
      spacing={3}
      sx={{
        gap: "5rem",
        flexWrap: "wrap",
        p: 5,
        paddingTop: "7.5rem",
        paddingBottom: "4rem",
      }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {planetsData.map((planetData) => {
        return (
          <Stack id="planets-container" key={planetData.name}>
            <Stack
              className={`planets ${
                selectedPlanets.includes(planetData.name)
                  ? "planet-clicked"
                  : "planet-unclicked"
              }`}
              onMouseEnter={() => {
                handleMouseEnter(planetData.name);
              }}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handlePlanetClick(planetData.name);
                if (selectedPlanets.includes(planetData.name)) {
                  setPlanetCurrentlySelected("");
                  enqueueSnackbar(`${planetData.name} unselected`, {
                    variant: "warning",
                  });
                } else if (planetCurrentlySelected === planetData.name) {
                  setPlanetCurrentlySelected("");
                } else {
                  setPlanetCurrentlySelected(planetData.name);
                }
              }}
            >
              <Avatar
                src={`/assets/Planets/${planetData.name}.png`}
                alt={planetData.name}
                className="planet-img"
              />
              <Typography variant="h6" className="planet-name">
                {planetData.name}
              </Typography>
              <Typography
                variant="subtitle2"
                className={`planet-distance ${
                  planetHovered === planetData.name
                    ? isVisible
                      ? "opacity-1"
                      : "opacity-0"
                    : "opacity-0"
                }`}
              >{`${planetData.distance} MegaMiles`}</Typography>
            </Stack>
            {planetCurrentlySelected === planetData.name ? (
              selectedPlanets.length < 4 ? (
                <Vehicles
                  vehiclesData={vehiclesData}
                  handleVehicleClick={handleVehicleClick}
                  planetCurrentlySelected={planetCurrentlySelected}
                  setPlanetCurrentlySelected={setPlanetCurrentlySelected}
                />
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Planets;
