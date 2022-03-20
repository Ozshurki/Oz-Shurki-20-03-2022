import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CgMenu} from "react-icons/cg";
import {GrFormClose} from "react-icons/gr";

import Navigation from "./navbar/navigation/Navigation";
import MobileNavBar from "./navbar/mobile-navbar/MobileNavBar";
import './Header.css';


const Header: React.FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    const hamburgerMenu = <CgMenu color="black"
                                  size="2rem"
                                  onClick={toggleOpen}/>;
    const closeMenu = <GrFormClose color="black"
                                   size="2rem"
                                   onClick={toggleOpen}/>;

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://herolo.co.il/static/a052c8dff834594961997ad17e06cff2/53cab/abra-logo.webp" alt="abra"/>
                </Link>
            </div>
            <div className="navbar">
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