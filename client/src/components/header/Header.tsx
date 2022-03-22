import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CgMenu} from "react-icons/cg";
import {IoMdClose} from "react-icons/io";
import {TiWeatherDownpour, TiWeatherPartlySunny} from "react-icons/ti";
import useLocalStorage from "use-local-storage";

import Navigation from "./navbar/navigation/Navigation";
import MobileNavBar from "./navbar/mobile-navbar/MobileNavBar";
import './Header.css';
import {BsToggleOn} from "react-icons/bs";


interface HeaderInt {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderInt> = ({toggleTheme}) => {

    const [open, setOpen] = useState<boolean>(false);
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');


    const toggleOpen = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const hamburgerMenu = <CgMenu color={theme ? "dark" : "white"}
                                  size="2rem"
                                  onClick={toggleOpen}/>;
    const closeMenu = <IoMdClose color={theme ? "dark" : "white"}
                                 size="2rem"
                                 onClick={toggleOpen}/>;

    return (
        <div className="header">
            <div className="logo">
                <TiWeatherPartlySunny color={theme ? "dark" : "white"} size="3rem"/>
            </div>
            <div className="navbar">
                <div className="theme-toggle-container">
                    Theme
                    <BsToggleOn className="toggle-theme"
                                color={theme ? "dark" : "white"}
                                size="1.7rem"
                                onClick={toggleTheme}/>
                </div>
                <Navigation/>
                {open && <MobileNavBar closeMobileMenu={closeMobileMenu}/>}
            </div>
            <div className="menu-icon">
                {open ? closeMenu : hamburgerMenu}
            </div>
        </div>
    );
};

export default Header;