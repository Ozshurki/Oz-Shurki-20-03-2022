import React from "react";
import "./Favorites.css";
import FavoritesContent from "../../components/favorites-content/FavoritesContent";


const Favorites: React.FC = () => {
    return (
        <div className="favorites-page">
            <FavoritesContent/>
        </div>
    );
};

export default Favorites;