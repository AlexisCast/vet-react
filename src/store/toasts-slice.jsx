import { createSlice } from "@reduxjs/toolkit";

const initialToastsState = {
	toasts: [],
	autoClose: true,
	autoCloseDuration: 5,
	position: "top-right",
};

const toastSlice = createSlice({
	name: "toasts",
	initialState: initialToastsState,
	reducers: {
		showToast(state, action) {
			const { message, type } = action.payload;
			console.log(message);
			console.log(type);
			const newToast = {
				id: Date.now(),
				message,
				type,
			};
			console.log(newToast);
			state.toasts.push(newToast);
		},
		removeToast(state, action) {
			const idToRemove = action.payload;
			state.toasts = state.toasts.filter(
				(toast) => toast.id !== idToRemove
			);
		},
		removeAllToasts(state) {
      state.toasts = [];
    },
		setAutoClose(state, action) {
			state.autoClose = action.payload;
		},
		setAutoCloseDuration(state, action) {
			state.autoCloseDuration = action.payload;
		},
		setPosition(state, action) {
			state.position = action.payload;
		},
	},
});

export const toastActions = toastSlice.actions;

//toastsReducer
export default toastSlice.reducer;
