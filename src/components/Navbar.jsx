import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdBedroomChild } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

import logoBase from "../assets/icon_logo/logo3.png"; // Adjust path as needed

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            role="navigation"
            aria-label="Main Navigation"
            className="w-full nav-bg text-white px-6 py-2 flex items-center justify-between relative z-50 "
        >
            {/* Left: Logo + Name */}
            <div className="flex items-center space-x-2 ml-4">
                <a
                    href="#"
                    className="flex items-center space-x-2
                "
                >
                    <img
                        src={logoBase}
                        alt="DeepSleep Logo"
                        className="w-12 h-12 object-contain rounded-full neon-glow"
                    />
                </a>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 font-semibold ">
                <a href="#about" className="nav-text transition font-montserrat">
                    About
                </a>
                <a href="#subscription" className="nav-text transition font-montserrat">
                    Subscription
                </a>
                <a href="#faq" className="nav-text transition font-montserrat">
                    FAQ
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="hover:text-primary-text transition"
                >
                    {isMenuOpen ? <FiX size={24} /> : <TiThMenu size={20} className=" text-[#00f0ff]" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-slate-800/95 backdrop-blur-sm 
                        flex flex-col items-center py-6 space-y-4 md:hidden 
                        border-t border-slate-700 animate-slideDown"
                >
                    <a href="#about" className="hover:text-primary-text transition text-lg font-montserrat">
                        About
                    </a>
                    <a href="#subscription" className="hover:text-primary-text transition text-lg font-montserrat">
                        Subscription
                    </a>
                    <a href="#faq" className="hover:text-primary-text transition text-lg font-montserrat">
                        FAQ
                    </a>
                </div>
            )}
        </nav>
    );
}
