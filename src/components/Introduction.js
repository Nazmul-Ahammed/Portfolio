import React, { useState,useEffect } from 'react';
import Lottie from 'lottie-react';
import lottie from './Picture/nazmul.json'; // Replace with your animation JSON file
import './Introduction.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


function Introduction() {

  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      // Add more AOS options as needed
    });
  }, []);

  const aboutTextStyle = {
    textAlign: 'left',
    color: 'rgb(133 236 158)', // Set the text color to Cyan
  };

  const h1Style = {
    fontSize: '2rem', // Increase the font size
    transform: 'translateX(0)', // Initial position for sliding effect
    transition: 'transform 0.5s ease-in-out', // Add sliding animation
  };

  const [showAnimation] = useState(true);

  return (
    <section className="introduction relative bg-gray-700">
      <div className="first-portion-intro" data-aos="flip-right">
        <div className="first-portion-div">
          <p style={aboutTextStyle}>Hello, I am</p>
          <h1 id="about-h1" style={{ ...aboutTextStyle, ...h1Style }}>
            Nazmul Ahammed
          </h1>
          <h1 id="about-h1" style={{ ...aboutTextStyle, ...h1Style }}>
            Full-Stack Web Developer
          </h1>
          <p style={{ ...aboutTextStyle,textAlign: 'justify' }}>
            I am a Computer Science graduate who is truly passionate about
            technology and loves solving problems. I have experience in
            software development and working with web technologies to make
            digital web Apps with the latest technologies.
          </p>
        </div>
      </div>
      <div className="second-portion-intro" data-aos="flip-left" >
        {showAnimation && (
          // Show the Lottie animation component if showAnimation is true
          <div className="animation-container1">
            <Lottie
              animationData={lottie}
            />
          </div>
        )}
      </div>
      <div style={{ clear: 'both' }}></div>
    </section>
  );
}

export default Introduction;
