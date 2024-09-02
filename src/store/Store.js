import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme/ThemeSlice";

export const store = configureStore({
	reducer: {
		theme: ThemeSlice,
	},
});
