const initialState = {
	answerId: {},
	answer: [],
	buttonDisabled: [],
};

const SET_ANSWER_ID = "SET_ANSWER_ID";
const SET_ANSWER = "SET_ANSWER";
const BUTTON_DISABLED = "BUTTON_DISABLED";

const qInputAnswerReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_ANSWER_ID:
			return {
				...state,
				answerId: action.payload,
			};
		case SET_ANSWER:
			return {
				...state,
				answer: action.payload,
			};
		case BUTTON_DISABLED:
			return {
				...state,
				buttonDisabled: action.payload,
			};
		default:
			return state;
	}
};

export const setAnswerId = (answerId) => ({
	type: SET_ANSWER_ID,
	payload: answerId,
});

export const setAnswer = (answer) => ({
	type: SET_ANSWER,
	payload: answer,
});

export const setButtonDisabled = (buttonDisabled) => ({
	type: BUTTON_DISABLED,
	payload: buttonDisabled,
});

export default qInputAnswerReduser;
