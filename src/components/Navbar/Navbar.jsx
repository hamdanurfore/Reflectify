
import React from 'react';
import './style.css'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-primary  text-gray-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img src="src\assets\reflectify-high-resolution-logo-transparent.png" alt="" />
                    </div>
                    <div className=" text-lg hidden md:block ">
                        <a href="#features" className="mx-2 font-bold">Features</a>
                        <a href="#demo" className="mx-2 font-bold">Request a demo</a>
                        <a href="#newsletter" className="mx-2 italic font-bold">Sign up for the newsletter</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
