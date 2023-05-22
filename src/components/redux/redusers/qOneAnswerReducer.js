const initialState = {
	answerId: null,
	answer: [],
	selectedAnswer: [],
	buttonDisabled: [],
};

const SET_ANSWER_ID = "SET_ANSWER_ID";
const SET_ANSWER = "SET_ANSWER";
const SET_SELECTED_ANSWER = "SET_SELECTED_ANSWER";
const SET_BUTTON_DISABLED = "SET_BUTTON_DISABLED";

const qOneAnswerReducer = (state = initialState, action) => {
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
		case SET_SELECTED_ANSWER:
			return {
				...state,
				selectedAnswer: action.payload,
			};
		case SET_BUTTON_DISABLED:
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

export const setSelectedAnswer = (selectedAnswer) => ({
	type: SET_SELECTED_ANSWER,
	payload: selectedAnswer,
});

export const setButtonDisabled = (buttonDisabled) => ({
	type: SET_BUTTON_DISABLED,
	payload: buttonDisabled,
});

export default qOneAnswerReducer;
