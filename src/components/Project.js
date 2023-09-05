import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import book from './Picture/book.jpg';
import nazmul from './Picture/logo.png';
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


function Project() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (in milliseconds)
      // Add more AOS options as needed
    });
  }, []);

  const projectTextStyle = {
    color: 'rgb(133 236 158)',
  };

  const projectContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '100px',
    marginTop: '50px',
  };

  const projectBoxStyle = {
    width: '30%',
    margin: '20px',
    marginTop: '60px',
    marginBottom: '40px',
    padding: '20px',
    background: 'gray-200',
    boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    borderRadius: '8px',
    position: 'relative',
    
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    // Remove the background property or set it to transparent
    background: 'transparent', // or background: 'none'
    margin: '0 auto',
    border: '2px solid #fff',
    position: 'relative',
    top: '-55px',
  };
  

  const projectNameStyle = {
    fontSize: '1.5rem',
    position: 'relative',
    top: '-50px',
  };

  const NameStyle = {
    fontSize: '2rem',
    position: 'relative',
    textAlign: 'center',
  };



  const buttonStyle1 = {
    backgroundColor: 'rgb(77 173 238)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    position:'relative',
    transition: 'background-color 0.3s ease',
    marginTop:'50px',
    top: '40px',
  };
  const buttonStyle2 = {
    backgroundColor: 'rgb(77 173 238)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    position:'relative',
    transition: 'background-color 0.3s ease',
    marginTop:'50px',
    top: '150px',
  };
  const buttonStyle3 = {
    backgroundColor: 'rgb(77 173 238)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    position:'relative',
    transition: 'background-color 0.3s ease',
    marginTop:'50px',
    top: '100px',
  };
  const buttonStyle4 = {
    backgroundColor: 'rgb(77 173 238)',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    position:'relative',
    transition: 'background-color 0.3s ease',
    marginTop:'50px',
    top: '40px',
  };

  return (
    <section style={projectTextStyle} className="project relative bg-gray-700" id="project">
      <h2 style={NameStyle}>Projects</h2>
      <div style={projectContainerStyle}>
        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          data-aos="zoom-in-right"
     >
        
          <div style={logoStyle} className="project-logo">
  <img src={nazmul} alt="book" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
</div>

          <h3 style={projectNameStyle}>Portfolio</h3>
          <p>The Portfolio Website, developed by React, is a showcase of my skills and accomplishments. It serves as an interactive and visually 
            engaging platform to display my projects, achievements, and personal information. With a modern and responsive design, this website 
            allows visitors to explore my work and get to know me better, making it an effective tool for presenting my professional identity and 
            creative endeavors. See this portfolio Websites Code! Checkout My github.</p>
          <div className="project-footer"></div>
          <button  style={buttonStyle1} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'   >
          <a href="https://github.com/Nazmul-Ahammed/Portfolio.git" className="project-link-button">View in Github</a>
          </button>
        </div>

        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          data-aos="zoom-in"
        >
          <div style={logoStyle} className="project-logo">
  <img src={book} alt="book" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
</div>

          <h3 style={projectNameStyle}>Book Resell Portal</h3>
          <p>A Backend project using ASP .NET MVC. Used 3-tire Architechture.
             Also followed SOLID principal. For databse MSSQL was used. 
             Managed database operations using Entity Framework.</p>
          <div className="project-footer"></div>
          <button  style={buttonStyle2} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'   >
          <a href="https://github.com/Nazmul-Ahammed/Book-Resell-Portal-.git" className="project-link-button">View in Github</a>
          </button>
        </div>
        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          data-aos="zoom-in-left"
        >
          <div style={logoStyle} className="project-logo">
  <img src={book} alt="book" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
</div>

          <h3 style={projectNameStyle}>Service Provider</h3>
          <p>This is a website where various day to day service can be ordered. used next js in the frontend and nestjs in the backend. 
            Designing using Tailwind CSS. Fetching data using axios. Validating data using pipes in nextjs. Making database using PostgreSQL. 
            Managing database operations using TypeORM.</p>
          <div className="project-footer"></div>
          <button  style={buttonStyle3} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'   >
          <a href="#" className="project-link-button">View in Github</a>
          </button>
        </div>

        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          data-aos="zoom-in-up"
        >
          <div style={logoStyle} className="project-logo">
  <img src={book} alt="book" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
</div>

          <h3 style={projectNameStyle}>Book Resell Portal(React,Tailwind CSS)</h3>
          <p>The Book Resell Portal is a dynamic web application built using React and Tailwind CSS. It provides a user-friendly platform for 
            individuals to buy and sell pre-owned books effortlessly. With an intuitive interface and responsive design, users can list their 
            books for sale, browse available titles, and make secure transactions, creating a seamless and efficient marketplace for book 
            enthusiasts.</p>
          <div className="project-footer"></div>
          <button  style={buttonStyle4} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'   >
          <a href="https://github.com/Nazmul-Ahammed/reactproject.git" className="project-link-button">View in Github</a>
          </button>
        </div>
        

        {/* Add more projects here as needed */}
      </div>

      {/* Responsive Styles for Small Devices */}
      <style>
        {`


          .project-box .project-link-button {
            display: none;
          }

          .project-box:hover .project-link-button {
            display: block;
          }


          @media (max-width: 768px) {
            .project-box {
              width: 100% !important; /* Make each project box full width */
              margin: 40px 0 !important; /* Add vertical spacing between project boxes */
            }
          }
        `}
      </style>
    </section>
  );
}

export default Project;
