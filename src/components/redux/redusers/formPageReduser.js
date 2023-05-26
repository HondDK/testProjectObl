const initialState = {
	student_examId: "",
	id: "",
	user: "",
};

const SET_STUDENT_EXAM_ID = "SET_STUDENT_EXAM_ID";
const SET_ID = "SET_ID";
const SET_USER = "SET_USER";

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
		case SET_USER:
			return {
				...state,
				user: action.payload,
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
export const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});
export default formPageReduser;
