import React from 'react';
import siteLogo from '../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
// eslint-disable-next-line no-unused-vars
// import { motion } from 'framer-motion';


const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left: Site Logo + Name */}
      <div className="flex-1">
        <div className="flex items-center gap-2 cursor-pointer">
  <img src={siteLogo} alt="logo" className="w-10 h-10  animate-bounce" />
  <span className="text-xl font-bold">Mitro</span>
</div>
      </div>

      {/* Right: Nav Items */}
      <div className="flex-none">
        <div className="hidden md:flex gap-3">
          <button className="btn btn-ghost">Home</button>
          <button className="btn btn-ghost">Dashboard</button>
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>Dashboard</a></li>
            <li><a>Login</a></li>
            <li><a>Sign Up</a></li>
          </ul>
        </div>

        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end ml-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/100" alt="user" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Header;