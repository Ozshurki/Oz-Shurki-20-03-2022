import {createSlice} from "@reduxjs/toolkit";
import {CityType} from "../../shared/types/city";


type sliceState = {
    cities: CityType[];
    citiesQuantity: number;
}

const initialState: sliceState = {
    cities: [],
    citiesQuantity: 0
};


const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addCity(state, action) {
            const newCity: CityType = action.payload;

            const cityIsExists = state.cities.find((existItem: CityType) => existItem.cityName === newCity.cityName);

            // Verify if city is already exists in the store
            if (cityIsExists) return;

            state.cities.push(
                {
                    key: newCity.key,
                    countryName: newCity.countryName,
                    cityName: newCity.cityName,
                    temperature: newCity.temperature,
                    weatherType: newCity.weatherType
                });
            state.citiesQuantity++;
        },
        deleteCity(state, action) {
            const wantedCity = action.payload;
            state.cities = state.cities.filter(city => city.key !== wantedCity.key);

            state.citiesQuantity--;
        },
        sort(state){
            state.cities.sort((a:CityType,b:CityType):number => {
                return (b.temperature - a.temperature);
            })
        }
    }
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;