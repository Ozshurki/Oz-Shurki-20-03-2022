import React from "react";

import "./Navigation.css"
import NavLinks from "../nav-links/NavLinks";


const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <NavLinks isMobile={false} closeMobileMenu={() => {}}/>
        </nav>
    );
};

export default Navigation;