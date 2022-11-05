import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Image from '../assets/landingbg.jpg';

const Landing = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-screen bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div
        className="flex justify-center items-center h-full"
      >
        <div
          className="flex justify-center flex-col bg-gray-100 p-8 rounded-lg"
        >
          <div className="flex justify-center">
            <img src={logo} className="flex m-8 h-14" alt="logo" />
          </div>
          <h1 className="font-display text-4xl text-center mb-2">Login</h1>
          <div className="flex justify-center flex-col my-2">
            <label className="font-display text-base mb-1.5">Email</label>
            <input
              type="email"
              className="font-display border border-black px-2 py-1"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex justify-center flex-col my-2">
            <label className="font-display text-base mb-1.5">Password</label>
            <input
              type="password"
              className="font-display border border-black px-2 py-1"
              placeholder="•••••••••••"
            />
          </div>
          <button className="my-4 bg-blue-200 p-2">Login</button>
          <div className="my-4 text-center">
            <span>Don't have account. Sign Up{" "}</span>
            <Link to="/signup" className="no-underline">
              <span className="text-blue-300">Here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
