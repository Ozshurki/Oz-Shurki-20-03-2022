import React from "react";


import "./FavoritesContent.css"
import FavoriteItem from "./favorite-item/FavoriteItem";
import {CityType} from "../../shared/types/city";
import {RootStateOrAny, useSelector} from "react-redux";

const FavoritesContent:React.FC = () => {

    const favoritesCities: CityType[] = useSelector((state: RootStateOrAny) => state.favorites.cities);

    return(
        <div className="favorites-content">
            <div className="favorites-items-container">

                {favoritesCities.length === 0 ?
                    <h1 className="favorites-is-empty-msg">Your favorites is empty</h1>
                    : favoritesCities.map((city:CityType, index:number) => {
                    return(
                        <FavoriteItem key={index} city={city}/>
                    )
                })}
            </div>
        </div>
    )
}

export default FavoritesContent;