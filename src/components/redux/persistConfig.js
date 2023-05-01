import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import testPageReducer from "./testPageSlice";

const rootReducer = combineReducers({
	testPage: testPageReducer,
	// add more reducers here if needed
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["testPage"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
