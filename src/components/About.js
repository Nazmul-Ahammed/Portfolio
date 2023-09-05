import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nazmul from './Picture/nazmul.png';
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


function About() {
  
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      // Add more AOS options as needed
    });
  }, []);

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
    maxWidth: '50%', // Ensure the image fits within the container
    height: 'auto', // Maintain aspect ratio
    padding:'20',
    marginRight:'-190px',
    marginLeft:'190px'
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
      <div style={firstPortionStyle} className="first-portion"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <img src={nazmul} alt="nazmul" style={imageStyle} />
      </div>
      <div style={secondPortionStyle} className="second-portion"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  >
        <h1
          id="about-h1"
          style={{ ...aboutTextStyle, ...h1Style , textAlign: 'center' }}
        >
          About Me
        </h1>
        <div style={{...aboutTextStyle,paddingBottom:'189px',textAlign: 'justify',marginTop:'50px',marginLeft:'65px',paddingRight:'145px'}} >
        

        I am a Computer Science graduate with a deep-seated passion for technology and a keen problem-solving mindset. Armed with a robust 
        foundation in programming languages like JavaScript, Java, and C++, I bring to the table extensive experience in software development. 
        My expertise extends to working with cutting-edge web technologies, including React, Node.js, Next.js, Nest.js, Spring MVC, and .Net MVC.
        My proficiency doesn't stop at frontend and backend development; I also have a solid grasp of algorithms, data structures, and database management 
        systems. With these skills in my arsenal, I am well-equipped to craft lightning-fast, elegantly designed, and responsive web applications that 
        meet the demands of the modern digital landscape.
          {/* ... your text content */}
        
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>

      {/* Responsive Styles for Small Devices */}
      
<style>
  {`
    @media (max-width: 768px) {
      .first-portion{
        width: 100% !important; /* Make both portions full width */
        float: none !important; /* Remove float to stack them vertically */
        padding: 0 !important; /* Remove padding for spacing */
        text-align: center !important; /* Center align the content */
        margin-left:-90px;
      }
      .second-portion {
        width: 100% !important; /* Make both portions full width */
        float: none !important; /* Remove float to stack them vertically */
        padding: 0 !important; /* Remove padding for spacing */
        text-align: center !important; /* Center align the content */
        padding-left:50px;
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
