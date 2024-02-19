import React from "react";

const Navbar = () => {

    return (
        <nav className="bg-primary p-4 shadow-lg w-full fixed top-0 left-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#" className="text-gray-800 font-bold text-3xl">
                        Reflectify
                    </a>
                </div>

                {/* Navigation links */}
                <div className="hidden md:flex">
                    <a href="#" className="text-gray-800 hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium">
                        Features
                    </a>
                    <a href="#" className="text-gray-800 hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium">
                        Request a demo
                    </a>
                    <a href="#" className="text-gray-800 hover:bg-secondary px-3 py-2 rounded-md text-sm font-medium">
                        Sign up for newsletter
                    </a>
                </div>

                {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button type="button" className="text-white hover:text-secondary focus:outline-none focus:text-white bg-secondary hover:bg-white rounded-full p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;