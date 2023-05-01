import { createSlice } from "@reduxjs/toolkit";

const testPageSlice = createSlice({
	name: "testPage",
	initialState: {
		hoursToPass: 0,
		minutesToPass: 0,
		secondsToPass: 0,
	},
	reducers: {
		setHoursToPass: (state, action) => {
			state.hoursToPass = action.payload;
		},
		setMinutesToPass: (state, action) => {
			state.minutesToPass = action.payload;
		},
		setSecondsToPass: (state, action) => {
			state.secondsToPass = action.payload;
		},
	},
	persist: ["hoursToPass", "minutesToPass", "secondsToPass"],
});

export const { setHoursToPass, setMinutesToPass, setSecondsToPass } =
	testPageSlice.actions;

export default testPageSlice.reducer;
