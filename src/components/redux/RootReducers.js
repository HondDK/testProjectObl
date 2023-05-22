import { combineReducers } from "redux";
import qOneAnswerReducer from "./redusers/qOneAnswerReducer";
import timeReducer from "./redusers/timeReduser";
import formPageReduser from "./redusers/formPageReduser";

const rootReducer = combineReducers({
	qOneAnswer: qOneAnswerReducer,
	time: timeReducer,
	formPage: formPageReduser,
});

export default rootReducer;
