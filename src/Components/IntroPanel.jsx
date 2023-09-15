import { useState, useEffect } from "react";
import "./IntroPanel.css";

function IntroPanel() {
  const text = `
  In the realm of Lengaburu, King Shan exiled Queen Al Falcone for 15 years after the Falicornia war. If she is found within 15 years, exile extends. 
  Brave souls across galaxies, will you aid in her search and shape a new celestial narrative?  
  `;

  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    const words = text.split(" ");
    let animatedTextContent = "";

    const animateText = (index) => {
      if (index < words.length) {
        animatedTextContent += words[index] + " ";
        setAnimatedText(animatedTextContent);
        setTimeout(() => {
          animateText(index + 1);
        }, 100);
      }
    };

    animateText(0);
  }, [text]);

  return (
    <div id="intropanel">
      <div className="quote-container">
        <p className="quote-text">{animatedText}</p>
      </div>
      <img
        src="/assets/king-shan.jpg"
        alt="King Shan"
        id="king-img"
        loading="lazy"
      />
    </div>
  );
}

export default IntroPanel;
