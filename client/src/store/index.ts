import {configureStore} from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favorites";
import modalSlice from "./slices/modal";


const store = configureStore({
    reducer: {favorites: favoritesSlice.reducer,
        modal: modalSlice.reducer}
});

export default store;