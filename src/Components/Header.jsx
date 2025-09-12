import React, { useContext } from 'react';
import siteLogo from '../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../Authentication/AuthContext';
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const handleSignOut = () => {
    handleLogout()
      .then(() => {
        toast.success("You've logged out successfully");
      })
      .catch(() => { });
  };

  return (
    <div className="navbar shadow-sm">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-[#165f1d] text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box shadow"
          >
            {
              user && user?.email ?
                <>
                  <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/classTracker">Class schedule tracker</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/budgetTracker">Budget tracker</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/qaGenerator">Q&A generator</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/studyPlanner">Study planner</NavLink></li>
                  {/* Dashboard + Logout only in dropdown */}
                  <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-red-600 font-semibold"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </li>
                </>
                :
                <>
                  <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                  <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
                </>
            }
          </ul>
        </div>

        <img className="hidden lg:block w-13 h-13 animate-bounce" src={siteLogo} alt="siteLogo" />
        <Link to="/" className="text-3xl font-extrabold text-[#165f1d]">Mitro</Link>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal text-[#165f1d] text-xl font-bold p-5">
          {
            user && user?.email ?
              <>
                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/classTracker">Class schedule tracker</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/budgetTracker">Budget tracker</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/qaGenerator">Q&A generator</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/studyPlanner">Study planner</NavLink></li>
              </>
              :
              <>
                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/login">Login</NavLink></li>
                <li className='navLinks lg:ml-10'><NavLink to="/register">Register</NavLink></li>
              </>
          }
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end mr-5">
  {
    user && user?.email ? (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          {/* Animated glowing ring */}
          <div className="rounded-full">

            <div className="rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="userPhoto" className="w-full h-full object-cover" />
              ) : (
                <HiOutlineUserCircle size={48} className="text-green-600" />
              )}
            </div>
          </div>
        </div>

        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li className="font-bold text-lg whitespace-nowrap text-green-700 px-2 py-1">
            Hi, {user?.displayName}
          </li>
          <li>
            <NavLink className="text-xl text-green-700" to="/dashboard">
              📊 Dashboard
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleSignOut}
              className="flex text-xl items-center gap-2 text-green-700"
            >
              <FiLogOut /> Logout
            </button>
          </li>
        </ul>
      </div>
    ) : (
      <HiOutlineUserCircle
        className="w-15 h-15 bg-white p-1 rounded-full"
        size={40}
      />
    )
  }
      </div>
    </div>

    
  );
};

export default Header;
