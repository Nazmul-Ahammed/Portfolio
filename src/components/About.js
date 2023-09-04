import React from 'react';
import nazmul from './Picture/nazmul.jpg';

function About() {
  const aboutTextStyle = {
    color: 'rgb(133 236 158)', // Set the text color to Cyan
  };

  const firstPortionStyle = {
    width: '50%', // Adjust the width as needed
    float: 'left', // Float the first portion to the left
    padding: '20px', // Add padding for spacing
    textAlign: 'center', // Center align the content
  };

  const imageStyle = {
    maxWidth: '100%', // Ensure the image fits within the container
    height: 'auto', // Maintain aspect ratio
  };

  const secondPortionStyle = {
    width: '50%', // Adjust the width as needed
    float: 'right', // Float the second portion to the right
  };

  const h1Style = {
    fontSize: '3rem', // Increase the font size
  };


  return (
    <section className="about relative bg-gray-700">
      <div style={firstPortionStyle} className="first-portion">
        <img src={nazmul} alt="nazmul" style={imageStyle} />
      </div>
      <div style={secondPortionStyle} className="second-portion">
        <h1
          id="about-h1"
          style={{ ...aboutTextStyle, ...h1Style , textAlign: 'center' }}
        >
          About Me
        </h1>
        <div style={{width: '100%',paddingBottom:'189px',textAlign: 'justify',marginTop:'50px',marginLeft:'65px',paddingRight:'145px'}} >
        

        I am a Computer Science graduate who is truly passionate about technology 
        and loves solving problems. With a solid foundation in programming languages 
        like JavaScript, Java, and C++, I have experience in software development and 
        working with web technologies such as React, Node.js, Next.js, Nest.js, Spring 
        MVC and .Net MVC etc. My expertise extends to algorithms, data structures, and 
        database management systems. Combined with these modern technologies, I can 
        create fast, well-designed, and responsive Web Apps.
          {/* ... your text content */}
        
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>

      {/* Responsive Styles for Small Devices */}
      
<style>
  {`
    @media (max-width: 768px) {
      .first-portion,
      .second-portion {
        width: 100% !important; /* Make both portions full width */
        float: none !important; /* Remove float to stack them vertically */
        padding: 0 !important; /* Remove padding for spacing */
        text-align: center !important; /* Center align the content */
      }

      .second-portion {
        margin-top: 20px !important; /* Add spacing between the two portions */
      }

    }
  `}
</style>

    </section>
  );
}

export default About;
