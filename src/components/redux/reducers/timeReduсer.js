const initialState = {
	hoursToPass: 0,
	minutesToPass: 0,
	secondsToPass: 0,
	initialDataLoaded: false,
};

const SET_HOURS_TO_PASS = "SET_HOURS_TO_PASS";
const SET_MINUTES_TO_PASS = "SET_MINUTES_TO_PASS";
const SET_SECONDS_TO_PASS = "SET_SECONDS_TO_PASS";
const SET_INITIAL_DATA_LOADED = "SET_INITIAL_DATA_LOADED";

const timeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_HOURS_TO_PASS:
			return {
				...state,
				hoursToPass: action.payload,
			};
		case SET_MINUTES_TO_PASS:
			return {
				...state,
				minutesToPass: action.payload,
			};
		case SET_SECONDS_TO_PASS:
			return {
				...state,
				secondsToPass: action.payload,
			};
		case SET_INITIAL_DATA_LOADED:
			return {
				...state,
				initialDataLoaded: action.payload,
			};
		default:
			return state;
	}
};

export const setHoursToPass = (hoursToPass) => ({
	type: SET_HOURS_TO_PASS,
	payload: hoursToPass,
});

export const setMinutesToPass = (minutesToPass) => ({
	type: SET_MINUTES_TO_PASS,
	payload: minutesToPass,
});

export const setSecondsToPass = (secondsToPass) => ({
	type: SET_SECONDS_TO_PASS,
	payload: secondsToPass,
});
export const setInitialDataLoaded = (initialDataLoaded) => ({
	type: SET_INITIAL_DATA_LOADED,
	payload: initialDataLoaded,
});
export default timeReducer;
