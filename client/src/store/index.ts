import {configureStore} from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favorites";


const store = configureStore({
    reducer: {favorites: favoritesSlice.reducer}
});

export default store;