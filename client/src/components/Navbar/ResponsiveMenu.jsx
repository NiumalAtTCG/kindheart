import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <>
      <div className={`fixed top-0 z-50 ${
        showMenu ? "left-0" : "left-[-100%]"
        } h-screen w-[75%] bg-white dark:bg-slate-950
         dark:text-white z-50 transition-all duration-500 
         pt-24 pb-6 px-8 flex flex-col justify-between 
         md:hidden   `}
         >
        {/* Nav section */}
        <div>
           {/* User section */}
           <div className="flex flex-col items-center gap-3">
            <FaUserCircle size={50} />
            <div>
                <h1 className="text-lg font-semibold">Niumal Silva</h1>

                <h1 className="text-sm">+94765906977</h1>
            </div>
           </div>
           {/* Menue section */}
           <nav className="mt-12">
            <ul className="space-y-6 text-lg font-semibold">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
           </nav>
        </div>
        {/* Nav Footer section */}
        <div>
            <p>© 2025 Kind Heart. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
