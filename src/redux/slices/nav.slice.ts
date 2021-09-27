import { createSlice } from "@reduxjs/toolkit"
import { NavActionType, NavReducerType } from "../../types/redux/nav.types"
import { RootState } from "../store"

const initialState: NavReducerType = {
	origin: "",
	destination: "",
	travelTimeInfo: null,
}

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setOrigin: (state, action: NavActionType) => {
			state.origin = action.payload
		},
		setDestination: (state, action: NavActionType) => {
			state.destination = action.payload
		},
		setTravelTimeInfo: (state, action: NavActionType) => {
			state.travelTimeInfo = action.payload
		},
	},
})

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions

export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInfo = (state: RootState) =>
	state.nav.travelTimeInfo

export default navSlice
