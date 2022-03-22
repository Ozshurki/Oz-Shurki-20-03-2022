import React from "react";
import "./SaveCity.css"
import {CityType} from "../../shared/types/city";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import useLocalStorage from "use-local-storage";
import {favoritesActions} from "../../store/slices/favorites";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {padNumber} from "../../utils/functions/pad-number";
import {DegreeType} from "../../shared/types/degree";


interface Props{
    locationKey:number;
    city:string;
    country:string;
    temperature:DegreeType | undefined;
    weatherIcon: string | undefined;
    weatherType: string;
}

const SaveCity:React.FC<Props>=(props) => {

    const dispatch = useDispatch();
    const [theme] = useLocalStorage<string>('theme' ? 'dark' : 'light', '');
    const savedCities = useSelector((state: RootStateOrAny) => state.favorites.cities);


    const saveCity = () => dispatch(favoritesActions.addCity({
        key: props.locationKey,
        country: props.country,
        cityName: props.city,
        temperature: props.temperature?.celsius,
        weatherType: props.weatherType,
        weatherIcon: padNumber(props.weatherIcon)
    }));
    const removeCity = () => dispatch(favoritesActions.deleteCity({key: props.locationKey}));

    return(
        <div className="save-city-container">
            {!savedCities.find((existItem: CityType) => existItem.key === props.locationKey) ?
                <>
                    <MdFavoriteBorder color={theme ? "dark" : "white"}
                                      size="1.9rem"
                                      onClick={saveCity}/>
                    <div className="save-city-btn"
                         onClick={saveCity}>Add to favorites
                    </div>
                </> :
                <>
                    <MdFavorite color={theme ? "dark" : "white"}
                                size="2.5rem"
                                onClick={removeCity}/>
                    <div className="delete-city-btn"
                         onClick={removeCity}>Remove from favorites
                    </div>
                </>
            }
        </div>
    )
}
export default SaveCity;