import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import { Button } from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
                <div className="flex items-center">
                    <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer">
                        <h1 className="font-semibold text-xl cursor-pointer" style={{ color: "lightyellow" }}>Trivago</h1>
                    </Link>
                </div>
                <nav className="hidden lg:flex items-center gap-5 md:gap-10 text-sm md:text-base">
                    <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Home</Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Features</Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Destinations</Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">About</Link>
                    <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Contact</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <h2 className="hover:text-brightColor transition-all cursor-pointer">Register</h2>
                    <Button title="Sign Up" backgroundColor="bg-white" />  
                </div>

                <div className="flex items-center p-2" onClick={handleClick}>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={`${menu ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Home</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Features</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Destinations</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">About</Link>
                <Link to="/" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Contact</Link>

                <div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
                    <h2 className="hover:text-brightColor transition-all cursor-pointer">Register</h2>
                    <Button title="Sign Up" backgroundColor="bg-white" />  
                </div>
            </div>
        </div>
    );
};