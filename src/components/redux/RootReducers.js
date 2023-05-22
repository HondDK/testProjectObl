import { combineReducers } from "redux";
import qOneAnswerReducer from "./redusers/qOneAnswerReducer";

const rootReducer = combineReducers({
	qOneAnswer: qOneAnswerReducer,
});

export default rootReducer;
