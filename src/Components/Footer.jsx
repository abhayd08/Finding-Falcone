import { Box } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box id="footer-title">Find Falcone</Box>
      <p className="footer-text">
        A part of GeekTrust Frontend Challenge:{" "}
        <a
          href="https://www.geektrust.com/coding/detailed/space"
          target="_blank"
          rel="noreferrer"
        >
          <span style={{ color: "blue" }}>Finding Falcone</span>
        </a>
        , it is a dynamic project seeking Queen Al Falcone. Join the quest
        through React-powered space exploration.
      </p>
    </Box>
  );
};

export default Footer;
