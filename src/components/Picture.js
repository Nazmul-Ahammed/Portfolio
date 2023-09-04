import React from 'react';
import profilePicture from './profile.jpg';

const Picture = () => {
  return (
    <section id="picture">
      <img src={profilePicture} alt="Profile" />
    </section>
  );
};

export default Picture;
