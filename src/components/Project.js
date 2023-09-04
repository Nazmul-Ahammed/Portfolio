import React from 'react';
import book from './Picture/book.jpg';


function Project() {
  const projectTextStyle = {
    color: '#da8080',
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
    transition: 'transform 0.0s ease-in-out',
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'url("/Picture/nazmul.jpg")',
    backgroundSize: 'cover',
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

  const onProjectBoxHover = (event) => {
    event.target.style.transform = 'scale(1.08)';
  };

  const onProjectBoxLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };
  const buttonStyle = {
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop:'50px',
    top: '155px',
  };

  return (
    <section style={projectTextStyle} className="project relative bg-gray-700" id="project">
      <h2 style={NameStyle}>Projects</h2>
      <div style={projectContainerStyle}>
        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          onMouseEnter={onProjectBoxHover}
          onMouseLeave={onProjectBoxLeave}
        >
          <div style={logoStyle}><img src={book} alt="book"  /></div>
          <h3 style={projectNameStyle}>Book Resell Portal</h3>
          <p>A Backend project using ASP .NET MVC. Used 3-tire Architechture.
             Also followed SOLID principal. For databse MSSQL was used. 
             Managed database operations using Entity Framework.</p>
          <div className="project-footer">Footer of Project 1</div>
          <button style={buttonStyle} >
          <a href="#" className="project-link-button">Link</a>
          </button>
        </div>

        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          onMouseEnter={onProjectBoxHover}
          onMouseLeave={onProjectBoxLeave}
        >
          <div style={logoStyle}><img src={book} alt="book"  /></div>
          <h3 style={projectNameStyle}>Project 2</h3>
          <p>Description of Project 2</p>
          <a href="#" className="project-link-button">Link</a>
          <div className="project-footer">Footer of Project 2</div>
        </div>
        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          onMouseEnter={onProjectBoxHover}
          onMouseLeave={onProjectBoxLeave}
        >
          <div style={logoStyle}></div>
          <h3 style={projectNameStyle}>Project 3</h3>
          <p>Description of Project 3</p>
          <a href="#" className="project-link-button">Link</a>
          <div className="project-footer">Footer of Project 3</div>
        </div>

        <div
          style={projectBoxStyle}
          className="project-box" // Add the project-box class
          onMouseEnter={onProjectBoxHover}
          onMouseLeave={onProjectBoxLeave}
        >
          <div style={logoStyle}></div>
          <h3 style={projectNameStyle}>Project 4</h3>
          <p>Description of Project 4</p>
          <a href="#" className="project-link-button">Link</a>
          <div className="project-footer">Footer of Project 4</div>
        </div>
        

        {/* Add more projects here as needed */}
      </div>

      {/* Responsive Styles for Small Devices */}
      <style>
        {`
          @media (max-width: 768px) {
            .project-box {
              width: 100% !important; /* Make each project box full width */
              margin: 20px 0 !important; /* Add vertical spacing between project boxes */
            }
          }
        `}
      </style>
    </section>
  );
}

export default Project;
