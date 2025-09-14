import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidSun,BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";


const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem
    ("theme") : "light"
  );
const  [showMenu, setShowMenu] = useState(false);
const element =document.documentElement;
const toggleMenu = () => {
  setShowMenu(!showMenu);
}

useEffect(() => {
  if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [theme]);
  return (
    <>
      <nav className="bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white fixed top-left-0 w-full border-b[1px] border-primar/50 ">
        <div className="container mx-auto">
          {/* logo section */}
          <div className="flex justify-between items-center h-[70px] py-2">
            <div className="text-2xl md:text-3xl uppercase">
              <a href="#">
                Kind{" "}
                <span className="inline-block font-bold text-red-500 ">
                  Heart
                </span>
              </a>
            </div>
            <div>
              {/* Desktop Menue section */}
              <div className="flex items-center gap-y-10">
                <ul className="hidden md:flex items-center gap-10 text-lg">
                  <li className="group relative cursor-pointer">
                    <a
                      href="#"
                      className="flex items-center gap-[2px] h-[72px]"
                    >
                      Home{""}
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                      </span>
                    </a>
                    {/* Drop Down Section */}
                    <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                      <ul className="space-y-3">
                        <li className="p-1 hover:bg-violet-200">Services</li>
                        <li className="p-1 hover:bg-violet-200">About Us</li>
                        <li className="p-1 hover:bg-violet-200">
                          Privercy Policy
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>About us</li>
                  <li>
                    <div className="flex items-center gap-4">
                      <div>
                        <BiPhoneCall
                          className="text-2xl h-[40px] w-[40px] rounded-md bg-primary hover:bg-purple/90"
                          p-2
                        />
                      </div>
                      <div>
                        <p>Talk to us</p>
                        <p>+94 765906977</p>
                      </div>
                    </div>
                  </li>
                  {/* Light and Dark moe switcher */}
                  {theme === "light" ? (
                    <BiSolidSun
                      onClick={() => setTheme("dark")}
                      className="text-2xl cursor-pointer"
                    />
                  ) :(
                    <BiSolidMoon
                      onClick={() => setTheme("light")}
                      className="text-2xl cursor-pointer"
                    />  
                  )}
                  
                </ul>
              </div>
              {/* mobile menue section */}
              <div className="md:hidden flex items-center gap-4">
                 {/* Light and Dark moe switcher */}
                  {theme === "light" ? (
                    <BiSolidSun
                      onClick={() => setTheme("dark")}
                      className="text-2xl cursor-pointer"
                    />
                  ) :(
                    <BiSolidMoon
                      onClick={() => setTheme("light")}
                      className="text-2xl cursor-pointer"
                    />  
                  )}
                  {showMenu ? (
                    <HiMenuAlt1
                    onClick={toggleMenu}
                     className="text-2xl cursor-pointer 
                     transition-all
                      size-30" />
                  ):(
                    <HiMenuAlt3
                    onClick={toggleMenu}
                      className="text-2xl cursor-pointer
                      transition-all
                      size-30"
                    />
                  )
                  }
                  
              </div>
                
            </div>
          </div>
        </div>
      </nav>
        {/* Mobile side menu components */}
          <ResponsiveMenu showMenu=
          {showMenu} />

    </>
  );
};

export default Navbar;
