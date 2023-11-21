import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const user = localStorage.getItem('user');
  return (
    <div className="grid grid-cols-10 bg-gray-400 p-4 w-full">
      <div className="col-span-2">
        <Link to="/">
            <img src={require("../../assets/logo.png")} alt="Book Club Logo" className="h-12 w-12" />
        </Link>
      </div>
      <div className="col-span-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Literary Luminaries</h1>
          <p className="text-gray-300">Explore, Discuss, Enjoy</p>
        </div>
        <div className="flex items-center">
          <Link to="/events" className="text-white mx-4">Events</Link>
          <Link to="/members" className="text-white mx-4">Members</Link>
          <Link to="/about" className="text-white mx-4">About Us</Link>
          {user ? (
            <button
            onClick={() => {
              localStorage.removeItem('user');
              window.location.reload(); 
            }}
            className="text-white mx-4"
          >
            Logout
          </button>
        ) : (
          <>
          <Link to="/login" className="text-white mx-4">Login</Link>
          <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md">Join Now</Link>
          </>)}
        </div>
      </div>
    </div>
  );
};

export default Header;
