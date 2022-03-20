import React from "react";
import "./FavoritesContent.css"
import FavoriteItem from "./favorite-item/FavoriteItem";

const FavoritesContent:React.FC = () => {
    return(
        <div className="favorites-content">
            <div className="favorites-items-container">
                <FavoriteItem/>
                <FavoriteItem/>
                <FavoriteItem/>
                <FavoriteItem/>
                <FavoriteItem/>
                <FavoriteItem/>
            </div>
        </div>
    )
}

export default FavoritesContent;