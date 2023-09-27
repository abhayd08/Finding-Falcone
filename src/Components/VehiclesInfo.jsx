import { Stack, Typography } from "@mui/material";
import "./VehiclesInfo.css";

function VehiclesInfo() {
  const vehiclesInfo = [
    {
      name: "Space Pod",
      img: "/assets/Vehicles/Space pod.webp",
      id: "v1",
      description:
        "The Space Pod is a compact and agile vehicle designed for short interstellar journeys. Its small size allows it to navigate through tight spaces and reach distant planets quickly. With a range of 200 MegaMiles, the Space Pod is ideal for missions that require swift travel and precise maneuvering.",
    },
    {
      name: "Space Rocket",
      img: "/assets/Vehicles/Space rocket.webp",
      id: "v2",
      description:
        "The Space Rocket is a powerful vehicle built for high-speed space travel. Equipped with advanced propulsion systems, it can cover vast distances of up to 300 MegaMiles in a short time. Its strong engines and aerodynamic design make it a preferred choice for missions that demand both speed and endurance.",
    },
    {
      name: "Space Shuttle",
      img: "/assets/Vehicles/Space shuttle.webp",
      id: "v3",
      description:
        "The Space Shuttle is a versatile spacecraft designed for medium-range journeys across the cosmos. It features a balanced combination of cargo capacity and passenger comfort, making it suitable for various mission profiles. With a range of 400 MegaMiles, the Space Shuttle ensures efficient transportation of both crew and resources.",
    },
    {
      name: "Space Ship",
      img: "/assets/Vehicles/Space ship.webp",
      id: "v4",
      description:
        "The Space Ship is a large and robust vehicle designed for long-haul interstellar travel. Its spacious interiors and advanced life-support systems make it suitable for extended missions across vast cosmic distances. With a remarkable range of 600 MegaMiles, the Space Ship is a dependable choice for explorations into the furthest reaches of space.",
    },
  ];
  return (
    <div id="vehicles-info-container">
      <Typography id="brand-vehiclesinfo" variant="h4">
        Vehicles
      </Typography>
      {vehiclesInfo.map((vehicleInfo) => {
        return (
          <div className="vehicles-info" key={vehicleInfo.id}>
            <Stack className="media-vehiclesinfo">
              <img
                src={vehicleInfo.img}
                alt={vehicleInfo.name}
                className="img-vehiclesinfo"
              />
              <Typography
                variant="subtitle1"
                className="vehicle-name-vehiclesinfo"
              >
                Space Pod
              </Typography>
            </Stack>
            <Typography className="description-vehiclesinfo" variant="body1">
              {vehicleInfo.description}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

export default VehiclesInfo;
