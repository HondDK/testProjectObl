import { combineReducers } from "redux";
import qOneAnswerReducer from "./redusers/qOneAnswerReducer";
import timeReducer from "./redusers/timeReduser";
import formPageReduser from "./redusers/formPageReduser";
import qInputAnswerReduser from "./redusers/qInputAnswerReduser";

const rootReducer = combineReducers({
	qOneAnswer: qOneAnswerReducer,
	time: timeReducer,
	formPage: formPageReduser,
	qInputAnswer: qInputAnswerReduser,
});

export default rootReducer;
