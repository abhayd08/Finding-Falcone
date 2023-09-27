import { Stack, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Vehicles.css";

function Vehicles({
  vehiclesData,
  handleVehicleClick,
  planetCurrentlySelected,
  setPlanetCurrentlySelected,
  setToShowPlanets,
}) {
  return (
    <>
      {vehiclesData && (
        <Stack id="box-container">
          <Button
            variant="contained"
            onClick={() => {
              setPlanetCurrentlySelected("");
              setToShowPlanets(true);
            }}
            color="success"
            sx={{ width: "2rem", backgroundColor: "red" }}
          >
            <CloseIcon />
          </Button>
          <Stack direction="row" spacing={4} id="vehicles-container">
            {vehiclesData
              ? vehiclesData.map((vehicleData) => {
                  return (
                    <Stack
                      spacing={1}
                      className="vehicles"
                      key={vehicleData.name.split(" ").join("-")}
                      onClick={() => {
                        handleVehicleClick(
                          planetCurrentlySelected,
                          vehicleData.name
                        );
                      }}
                    >
                      <div className="vehicle-img-container">
                        <img
                          src={`/assets/Vehicles/${vehicleData.name}.webp`}
                          alt={vehicleData.name}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <Typography
                        varant="h6"
                        className="vehicle-name"
                        sx={{ letterSpacing: "2px" }}
                      >
                        {vehicleData.name}
                      </Typography>
                      <div className="vehicle-description">
                        <span>Range: </span>
                        <strong>{vehicleData["max_distance"]} MegaMiles</strong>
                      </div>
                      <div className="vehicle-description">
                        Speed: <strong>{vehicleData.speed} MM/h</strong>
                      </div>
                      {vehicleData["total_no"] !== 0 ? (
                        <div className="vehicle-description">
                          <strong>({vehicleData["total_no"]})</strong>
                        </div>
                      ) : (
                        <div className="vehicle-description">
                          <strong>(Unavailable)</strong>
                        </div>
                      )}
                    </Stack>
                  );
                })
              : ""}
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default Vehicles;
