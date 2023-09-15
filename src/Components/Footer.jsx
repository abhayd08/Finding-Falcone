import { Box } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box id="footer-title">
        Find Falcone
      </Box>
      <p className="footer-text">
      A dynamic project seeking Queen Al Falcone. Join the quest through React-powered space exploration.
      <br /><br />Part of GeekTrust Frontend Challenge: <a href="https://www.geektrust.com/coding/detailed/space" target="_blank" rel="noreferrer"><span style={{color: "#161050"}}>Finding Falcone</span></a>
      </p>
    </Box>
  );
};

export default Footer;