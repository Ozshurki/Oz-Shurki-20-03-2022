import React from 'react';
import {Link} from 'react-router-dom';
import "./NavLinks.css";
import {motion} from "framer-motion";

interface Props {
    isMobile: boolean;
    closeMobileMenu: () => void;
}

const NavLinks: React.FC<Props> = (props) => {

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    const onClickHandler = () =>{
        props.isMobile && props.closeMobileMenu();
    }

    return (
        <ul className="list">
            <motion.li className="link-container"
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay: 0.05}}>
                <Link className="link"
                      to="/"
                      onClick={onClickHandler}>Home</Link>
            </motion.li>
            <motion.li className="link-container"
                       initial={animateFrom}
                       animate={animateTo}
                       transition={{delay: 0.10}}>
                <Link className="link"
                      to="/favorites"
                      onClick={onClickHandler}>Favorites
                    <span className="cart-badge">3</span>
                </Link>
            </motion.li>
        </ul>
    );
};

export default NavLinks;