import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { createStore } from "redux";
import React from "react";
import { store, persistor } from "./components/redux/store/configureStore";

import FormPage from "./pages/FormPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage";
import ResultsTest from "./pages/ResultsTest";

import "./style/style.scss";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},

		{
			path: "/form/:uuid",
			element: <FormPage />,
		},
		{
			path: "/test_page/:uuid",
			element: <TestPage />,
		},
		{
			path: "/results_test/:uuid",
			element: <ResultsTest />,
		},
	]);

	const persistor = persistStore(store);
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
