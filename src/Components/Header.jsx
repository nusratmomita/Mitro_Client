import React, { useContext } from 'react';
import siteLogo from '../assets/siteLogo.png';
import { Link, NavLink } from 'react-router';
import './Header.css';
import { toast } from 'react-toastify';
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from '../Authentication/AuthContext';
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {

    const {user , handleLogout} = useContext(AuthContext);

    const handleSignOut = () => {
        handleLogout()
        .then(()=>{
            toast.success("You've logged out successfully" );
        })
        .catch(()=>{
        })
    }

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-[#165f1d] text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box shadow">
                          {
                            user && user?.email ? 
                             <>
                                <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/classTracker">Class schedule tracker</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/budgetTracker">Budget tracker</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/qaGenerator">Q&A generator</NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/studyPlanner">Study planner </NavLink></li>
                                <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard </NavLink></li>
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
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal text-[#165f1d] text-xl font-bold p-5">
                {
                    user && user?.email ? 
                    <> 
                        <li className='navLinks'><NavLink to="/">Home</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/classTracker">Class schedule tracker</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/budgetTracker">Budget tracker</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/qaGenerator">Q&A generator</NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/studyPlanner">Study planner </NavLink></li>
                        <li className='navLinks lg:ml-10'><NavLink to="/dashboard">Dashboard </NavLink></li>
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
            <div className="navbar-end">
                <div className='flex gap-2 lg:gap-4 justify-center items-center'>
                    {
                        user && user?.email ?
                        <>
                            <img className="w-10 h-10 bg-white p-1 rounded-full" src={user?.photoURL} alt="userPhoto" />
                            <h1 className='text-[#51AF5B] text-2xl font-bold'>Hi,{user?.displayName}</h1>
                        </>
                        :
                        <HiOutlineUserCircle className="w-15 h-15 bg-white p-1 rounded-full" size={25}></HiOutlineUserCircle>
                    }
                </div>
                {
                    (user && user?.email) ?
                    <button className="ml-6 lg:ml-3  p-3 flex gap-2 bg-[#B2A5FF] rounded-2xl justify-center items-center cursor-pointer hover:rounded-4xl hover:bg-[#a6ace0] text-2xl" onClick={handleSignOut} ><FiLogOut size={25} color='purple'></FiLogOut>Logout</button>
                    :
                    "" 
                }
            </div>
        </div>
    );
};

export default Header;