import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import toastsReducer from "./toasts-slice.jsx";

const store = configureStore({
	reducer: { ui: uiReducer, toasts: toastsReducer },
});

export default store;
