import {createSlice} from "@reduxjs/toolkit";

type sliceState = {
    showModal :boolean;
}

const initialState: sliceState = {
    showModal:false
};


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal(state) {
            state.showModal =! state.showModal;
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice;