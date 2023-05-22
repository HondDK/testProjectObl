import { combineReducers } from "redux";
import qOneAnswerReducer from "./redusers/qOneAnswerReducer";
import timeReducer from "./redusers/timeReduser";

const rootReducer = combineReducers({
	qOneAnswer: qOneAnswerReducer,
	time: timeReducer,
});

export default rootReducer;
