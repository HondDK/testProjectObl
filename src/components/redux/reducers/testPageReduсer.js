const initialState = {
	ex_name: "",
};

const SET_EX_NAME = "SET_EX_NAME";

const testPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EX_NAME:
			return {
				...state,
				ex_name: action.payload,
			};

		default:
			return state;
	}
};

export const setStudent_examId = (ex_name) => ({
	type: SET_EX_NAME,
	payload: ex_name,
});

export default testPageReducer;
