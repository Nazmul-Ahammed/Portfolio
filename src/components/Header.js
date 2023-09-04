import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './Picture/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const TextStyle = {
    color: 'Cyan', // Set the text color to white
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle the file download
  const handleDownload = () => {
    // Replace 'your-file-path.pdf' with the actual path to your file
    const filePath = 'your-file-path.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = filePath;

    // Set the download attribute and filename
    link.download = 'your-file-name.pdf'; // Change the filename as needed

    // Simulate a click to trigger the download
    link.click();
  };

  return (
    <header
      style={TextStyle}
      className="bg-gray-800 p-6 text-white fixed top-0 w-full z-50"
    >
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Your Logo" className="w-30 h-12" />
        </div>
        <div
          style={TextStyle}
          className="flex-grow flex justify-end space-x-4 ml-12"
        >
          <button
            className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom sm:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } sm:flex space-x-4 sm:block`}
          >
             <button className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom">
              <Link
                to="introduction"
                smooth={true}
                offset={-120}
                duration={500}
                className="text-white"
              >
                Introduction
              </Link>
            </button>
            <button className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom">
              <Link
                to="about"
                smooth={true}
                offset={-120}
                duration={500}
                className="text-white"
              >
                About
              </Link>
            </button>

            <button className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom">
              <Link
                to="project"
                smooth={true}
                offset={-110}
                duration={500}
                className="text-white"
              >
                Project
              </Link>
            </button>

            <button className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom">
              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-white"
              >
                Contact
              </Link>
            </button>
          </div>
        </div>
        {/* Add a file download button */}
        <button
          className="nav-button bg-gray-800 hover:bg-gray-700 transition-transform hover:-translate-y-2 transform origin-bottom"
          onClick={handleDownload}
        >
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
