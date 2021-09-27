import { configureStore } from "@reduxjs/toolkit"
import navSlice from "./slices/nav.slice"

const store = configureStore({
	reducer: {
		nav: navSlice.reducer,
	},
	preloadedState: {
		nav: {
			origin: "",
			destination: "",
			travelTimeInfo: null,
		},
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
