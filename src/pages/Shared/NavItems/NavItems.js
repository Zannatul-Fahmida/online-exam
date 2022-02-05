import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CommonBtn from '../CommonBtn/CommonBtn';

const NavItems = () => {
    const { user, logOut } = useAuth();
    const [active, setActive] = useState("home");
    return (
        <>
            <Link onClick={() => setActive("home")} className={active === "home" ? "text-xl hover:text-purple-800 my-2 border-b-4 border-purple-600 mx-4" : "text-xl hover:text-purple-800 my-2 mx-4"} to="/">
                Home
            </Link>
            <Link onClick={() => setActive("about")} className={active === "about" ? "text-xl hover:text-purple-800 my-2 border-b-4 border-purple-600 mx-4" : "text-xl hover:text-purple-800 my-2 mx-4"} to="/about">
                About
            </Link>
            <Link
                onClick={() => setActive("features")}
                className={active === "features" ? "text-xl hover:text-purple-800 my-2 border-b-4 border-purple-600 mx-4" : "text-xl hover:text-purple-800 my-2 mx-4"}
                to="/features"
            >
                Features
            </Link>
            <Link
                onClick={() => setActive("contact")}
                className={active === "contact" ? "text-xl hover:text-purple-800 my-2 border-b-4 border-purple-600 mx-4" : "text-xl hover:text-purple-800 my-2 mx-4"}
                to="/contact"
            >
                Contact
            </Link>
            {user.email ?
                <>
                    <Link
                        onClick={() => setActive("dashboard")}
                        className={active === "dashboard" ? "text-xl hover:text-purple-800 my-2 border-b-4 border-purple-600 mx-4" : "text-xl hover:text-purple-800 my-2 mx-4"}
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <span className="text-xl mr-2 text-purple-900">{user.displayName}</span>
                    <button onClick={logOut} className="justify-self-center items-center py-1.5 px-7 border-2 border-purple-700 rounded-md text-xl font-bold text-purple-900 bg-pink-200 hover:bg-purple-700 hover:text-white">Log out</button>
                </> :
                <CommonBtn destination="/login" title="Login" />
            }
        </>
    );
};

export default NavItems;