import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from './Picture/logo.png';

function Header() {
  const [isOpen] = useState(false);

  const TextStyle = {
    color: 'Cyan', // Set the text color to white
  };

  // Function to handle the file download
  const handleDownload = () => {
    // Replace 'your-file-path.pdf' with the actual path to your file
    const filePath = 'https://drive.google.com/file/d/1aWsXvueqcVT-v-uFQb6lftOHOPtggxlm/view?usp=drive_link';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = filePath;

    // Set the download attribute and filename
    link.download = 'Nazmul CV'; // Change the filename as needed

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

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } sm:flex space-x-4 sm:block`}
          >
             <button>
              <Link
                to="introduction"
                smooth={true}
                offset={-120}
                duration={500}
                className="text-white"
              >
                Introduction
              </Link>
            </button >
            <button >
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

            <button >
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

            <button >
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

            <button
            onClick={handleDownload}
             >
            Resume
            </button>
           </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
