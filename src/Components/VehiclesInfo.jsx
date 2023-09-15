import { Stack, Typography } from "@mui/material";
import "./VehiclesInfo.css";

function VehiclesInfo() {
  return (
    <div id="vehicles-info-container">
      <Typography id="brand-vehiclesinfo" variant="h4">
        Vehicles
      </Typography>
      <div className="vehicles-info">
        <Stack className="media-vehiclesinfo">
          <img
            src="/assets/Vehicles/Space pod.png"
            alt="Space Pod"
            className="img-vehiclesinfo"
          />
          <Typography variant="h6" className="vehicle-name-vehiclesinfo">
            Space Pod
          </Typography>
        </Stack>
        <Typography className="description-vehiclesinfo" variant="subtitle1">
          The Space Pod is a compact and agile vehicle designed for short
          interstellar journeys. Its small size allows it to navigate through
          tight spaces and reach distant planets quickly. With a range of{" "}
          <strong>200 MegaMiles</strong>, the Space Pod is ideal for missions
          that require swift travel and precise maneuvering.
        </Typography>
      </div>
      <div className="vehicles-info">
        <Stack className="media-vehiclesinfo">
          <img
            src="/assets/Vehicles/Space rocket.png"
            alt="Space Rocket"
            className="img-vehiclesinfo"
          />
          <Typography variant="h6" className="vehicle-name-vehiclesinfo">
            Space Rocket
          </Typography>
        </Stack>
        <Typography className="description-vehiclesinfo" variant="subtitle1">
          The Space Rocket is a powerful vehicle built for high-speed space
          travel. Equipped with advanced propulsion systems, it can cover vast
          distances of up to <strong>300 MegaMiles</strong> in a short time. Its
          strong engines and aerodynamic design make it a preferred choice for
          missions that demand both speed and endurance.
        </Typography>
      </div>
      <div className="vehicles-info">
        <Stack className="media-vehiclesinfo">
          <img
            src="/assets/Vehicles/Space shuttle.png"
            alt="Space Shuttle"
            className="img-vehiclesinfo"
          />
          <Typography variant="h6" className="vehicle-name-vehiclesinfo">
            Space Shuttle
          </Typography>
        </Stack>
        <Typography className="description-vehiclesinfo" variant="subtitle1">
          The Space Shuttle is a versatile spacecraft designed for medium-range
          journeys across the cosmos. It features a balanced combination of
          cargo capacity and passenger comfort, making it suitable for various
          mission profiles. With a range of <strong>400 MegaMiles</strong>, the
          Space Shuttle ensures efficient transportation of both crew and
          resources.
        </Typography>
      </div>
      <div className="vehicles-info">
        <Stack className="media-vehiclesinfo">
          <img
            src="/assets/Vehicles/Space ship.png"
            alt="Space Ship"
            className="img-vehiclesinfo"
          />
          <Typography variant="h6" className="vehicle-name-vehiclesinfo">
            Space Ship
          </Typography>
        </Stack>
        <Typography className="description-vehiclesinfo" variant="subtitle1">
          The Space Ship is a large and robust vehicle designed for long-haul
          interstellar travel. Its spacious interiors and advanced life-support
          systems make it suitable for extended missions across vast cosmic
          distances. With a remarkable range of <strong>600 MegaMiles</strong>,
          the Space Ship is a dependable choice for explorations into the
          furthest reaches of space.
        </Typography>
      </div>
    </div>
  );
}

export default VehiclesInfo;
