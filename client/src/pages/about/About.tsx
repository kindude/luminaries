import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          Welcome to our Book Club! We are passionate about literature and love
          to explore, discuss, and enjoy books together.
        </p>
        <p className="text-gray-700 mt-2">
          Our mission is to create a community where book lovers can connect,
          share their thoughts, and discover new literary treasures.
        </p>
        <p className="text-gray-700 mt-2">
          Join us on this literary journey, and let's explore the world of books
          together!
        </p>
      </div>
    </div>
  );
};

export default About;
