import { Stack, Avatar, Typography } from "@mui/material";
import "./PlanetsInfo.css";

function PlanetsInfo() {
  const planetsInfo = [
    {
      name: "Donlon",
      img: "/assets/Planets/Donlon.webp",
      distance: "100 MegaMiles",
      id: "p1",
      description:
        "DonLon, the closest planet to Lengaburu, is shrouded in mystery. With its proximity, it's a prime candidate for the search for Queen Al Falcone. However, the challenges of navigating the cosmic shadows are still significant. Will DonLon reveal the hidden secrets?",
    },
    {
      name: "Enchai",
      img: "/assets/Planets/Enchai.webp",
      distance: "200 MegaMiles",
      id: "p2",
      description:
        "Enchai, known for its tranquil landscapes and celestial beauty, lies further away. Its distance presents both a challenge and an opportunity. King Shan must decide if Enchai's serene atmosphere holds any clues to Queen Al Falcone's whereabouts.",
    },
    {
      name: "Jebing",
      img: "/assets/Planets/Jebing.webp",
      distance: "300 MegaMiles",
      id: "p3",
      description:
        "Jebing, a planet cloaked in intrigue, stands at a distance that tests the mettle of the disposal fleet. King Shan's decision to include Jebing in the search raises questions about the risks and rewards that lie beyond its cosmic veil.",
    },
    {
      name: "Sapir",
      img: "/assets/Planets/Sapir.webp",
      distance: "400 MegaMiles",
      id: "p4",
      description:
        "Sapir, with its vast expanses and unknown terrain, lies at a distance that pushes the limits of the available disposals. As King Shan's quest deepens, Sapir's allure becomes even more enticing. What awaits the explorers who venture to its cosmic embrace?",
    },
    {
      name: "Lerbin",
      img: "/assets/Planets/Lerbin.webp",
      distance: "500 MegaMiles",
      id: "p5",
      description:
        "Lerbin, a distant beacon in the cosmos, beckons with a promise of answers. At 500 MegaMiles away, it's a pivotal waypoint in King Shan's search for Queen Al Falcone. The challenges of reaching Lerbin are matched only by the potential revelations it may hold.",
    },
    {
      name: "Pingasor",
      img: "/assets/Planets/Pingasor.webp",
      distance: "600 MegaMiles",
      id: "p6",
      description:
        "Pingasor, the farthest and most enigmatic of the six planets, presents the ultimate test for King Shan's disposal fleet. At a distance of 600 MegaMiles, it's a destination of last resort. Will Queen Al Falcone's hidden refuge be found among its cosmic shadows?",
    },
  ];

  return (
    <div id="planets-info-container">
      <Typography id="brand-planetsinfo" variant="h4">
        Planets
      </Typography>

      {planetsInfo.map((planetInfo) => {
        return (
          <div className="planets-info" key={planetInfo.id}>
            <Stack className="media-planetsinfo">
              <Avatar
                src={planetInfo.img}
                alt={planetInfo.name}
                className="img-planetsinfo"
              />
              <Typography
                variant="subtitle1"
                className="planet-name-planetsinfo"
              >
                {planetInfo.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  opacity: 0.9,
                  fontSize: ".8rem",
                  fontFamily: '"Comfortaa", sans-serif !important',
                }}
              >
                {planetInfo.distance}
              </Typography>
            </Stack>
            <Typography className="description-planetsinfo" variant="body1">
              {planetInfo.description}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

export default PlanetsInfo;
