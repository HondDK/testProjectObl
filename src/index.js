import React from "react";
import ReactDOM from "react-dom/client";
import FormPage from "./pages/FormPage";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage";
import MainPage from "./pages/MainPage";
import ResultsTest from "./pages/ResultsTest";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
