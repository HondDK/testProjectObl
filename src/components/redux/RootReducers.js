import { combineReducers } from "redux";
import qOneAnswerReducer from "./reducers/qOneAnswerReducer";
import timeReducer from "./reducers/timeReduсer";
import formPageReducer from "./reducers/formPageReduсer";
import QInputAnswerReducer from "./reducers/qInputAnswerReduсer";
import testPageReducer from "./reducers/testPageReduсer";

const rootReducer = combineReducers({
	qOneAnswer: qOneAnswerReducer,
	time: timeReducer,
	formPage: formPageReducer,
	qInputAnswer: QInputAnswerReducer,
	testPage: testPageReducer,
});

export default rootReducer;
