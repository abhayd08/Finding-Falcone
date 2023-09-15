import { Stack, Avatar, Typography } from "@mui/material";
import "./PlanetsInfo.css";

function PlanetsInfo() {
  return (
    <div id="planets-info-container">
      <Typography id="brand-planetsinfo" variant="h4">
        Planets
      </Typography>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Donlon.webp"
            alt="Donlon"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Donlon
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            100 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          DonLon, the closest planet to Lengaburu, is shrouded in mystery. With
          its proximity, it's a prime candidate for the search for Queen Al
          Falcone. However, the challenges of navigating the cosmic shadows are
          still significant. Will DonLon reveal the hidden secrets?
        </Typography>
      </div>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Enchai.webp"
            alt="Enchai"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Enchai
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            200 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          Enchai, known for its tranquil landscapes and celestial beauty, lies
          further away. Its distance presents both a challenge and an
          opportunity. King Shan must decide if Enchai's serene atmosphere holds
          any clues to Queen Al Falcone's whereabouts.
        </Typography>
      </div>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Jebing.webp"
            alt="Jebing"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Jebing
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            300 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          Jebing, a planet cloaked in intrigue, stands at a distance that tests
          the mettle of the disposal fleet. King Shan's decision to include
          Jebing in the search raises questions about the risks and rewards that
          lie beyond its cosmic veil.
        </Typography>
      </div>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Sapir.webp"
            alt="Sapir"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Sapir
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            400 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          Sapir, with its vast expanses and unknown terrain, lies at a distance
          that pushes the limits of the available disposals. As King Shan's
          quest deepens, Sapir's allure becomes even more enticing. What awaits
          the explorers who venture to its cosmic embrace?
        </Typography>
      </div>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Lerbin.webp"
            alt="Lerbin"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Lerbin
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            500 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          Lerbin, a distant beacon in the cosmos, beckons with a promise of
          answers. At 500 MegaMiles away, it's a pivotal waypoint in King Shan's
          search for Queen Al Falcone. The challenges of reaching Lerbin are
          matched only by the potential revelations it may hold.
        </Typography>
      </div>

      <div className="planets-info">
        <Stack className="media-planetsinfo">
          <Avatar
            src="/assets/Planets/Pingasor.webp"
            alt="Pingasor"
            className="img-planetsinfo"
          />
          <Typography variant="h6" className="planet-name-planetsinfo">
            Pingasor
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            600 MegaMiles
          </Typography>
        </Stack>
        <Typography className="description-planetsinfo" variant="subtitle1">
          Pingasor, the farthest and most enigmatic of the six planets, presents
          the ultimate test for King Shan's disposal fleet. At a distance of 600
          MegaMiles, it's a destination of last resort. Will Queen Al Falcone's
          hidden refuge be found among its cosmic shadows?
        </Typography>
      </div>
    </div>
  );
}

export default PlanetsInfo;
