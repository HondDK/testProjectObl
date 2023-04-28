import FormPage from "./pages/FormPage";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import React, { useEffect } from "react";
//import TestPage from "./pages/TestPage";
import "./style/style.scss";

function App() {
	// function handleBeforeUnload(event) {
	// 	event.preventDefault();
	// 	event.returnValue = ""; // сообщение, которое будет отображаться в диалоговом окне
	// }

	// useEffect(() => {
	// 	window.addEventListener("beforeunload", handleBeforeUnload);
	// 	return () => {
	// 		window.removeEventListener("beforeunload", handleBeforeUnload);
	// 	};
	// }, []);
	function handleCopy(e) {
		e.preventDefault();
		navigator.clipboard.writeText("...");
	}

	return (
		<div className="App" onCopy={handleCopy}>
			{/* <TestPage></TestPage> */}
			{/* <FormPage></FormPage> */}
			<MainPage></MainPage>
			
		</div>
	);
}

export default App;
