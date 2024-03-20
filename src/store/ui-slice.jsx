import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
	drawerIsVisible: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState: initialUIState,
	reducers: {
		closeDrawer(state) {
			state.drawerIsVisible = false;
		},
		openDrawer(state) {
			state.drawerIsVisible = true;
		},
	},
});

export const uiActions = uiSlice.actions;

//uiReducer
export default uiSlice.reducer;
