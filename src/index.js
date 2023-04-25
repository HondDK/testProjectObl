import React from "react";
import ReactDOM from "react-dom/client";
import FormPage from "./pages/FormPage";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/form",
		element: <FormPage />,
	},
	{
		path: "/testpage",
		element: <TestPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
