const initialState = {
	student_examId: "",
	id: "",
};

const SET_STUDENT_EXAM_ID = "SET_STUDENT_EXAM_ID";
const SET_ID = "SET_ID";

const formPageReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_STUDENT_EXAM_ID:
			return {
				...state,
				student_examId: action.payload,
			};
		case SET_ID:
			return {
				...state,
				id: action.payload,
			};
		default:
			return state;
	}
};

export const setStudent_examId = (student_examId) => ({
	type: SET_STUDENT_EXAM_ID,
	payload: student_examId,
});

export const setId = (id) => ({
	type: SET_ID,
	payload: id,
});

export default formPageReduser;
