import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Lottie from 'lottie-react';
import lottie from './nazmul.json'; // Replace with your animation JSON file

function App() {
  const TextStyle = {
    color: '#da8080',
  };

  // State to manage whether to show the animation or not
  const [showAnimation, setShowAnimation] = useState(true);

  // Add a useEffect hook to hide the animation after a certain time (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  // CSS style for the animation container
  const animationContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999, // Place it above other content
    backgroundColor: '#374151', // Background color code
  };

  return (
    <div style={TextStyle} className="portfolio bg-gray-700">
      {showAnimation && (
        // Show the Lottie animation component if showAnimation is true
        <div style={animationContainerStyle}>
          <Lottie
            animationData={lottie}
            style={{ width: '100%', height: '100%' ,paddingTop:'100px' }} // Make sure it fills the entire container
          />
        </div>
      )}

      {!showAnimation && (
        // Show the main website content if showAnimation is false
        <>
          <Header />
          <main className="relative">
            <Introduction id="introduction" />
            <About id="about" />
            <Project id="project" />
            <Contact id="contact" />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
