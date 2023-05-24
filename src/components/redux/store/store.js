import { createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Импортируйте ваши редьюсеры
import rootReducer from "../RootReducers";

// Конфигурация для redux-persist
const persistConfig = {
	key: "root",
	storage,
};

// Создание персистентного редьюсера
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создание Redux-хранилища
export const store = createStore(persistedReducer);
