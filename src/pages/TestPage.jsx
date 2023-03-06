import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/testPage/Nav";
import Timer from "../components/testPage/Timer";
import QOneAnswer from "../components/testPage/QOneAnswer";

const TestPage = () => {
	const [typeTest, setTypeTest] = useState([]);

	useEffect(() => {
		fetchTypeTest();
	}, []);
	async function fetchTypeTest() {
		try {
			const response = await axios.get(
				"https://63305deb591935f3c88e9057.mockapi.io/type_test"
			);
			setTypeTest(response.data);
			console.log(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<>
			<header>
				<h1>Тестирование по математике</h1>
				<Timer />
			</header>
			<Nav props={typeTest} />
			<main>  
				<QOneAnswer></QOneAnswer>
			</main>
		</>
	);
};

export default TestPage;
