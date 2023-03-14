import React, { useEffect, useState } from "react";

import Nav from "../components/testPage/Nav";
import Timer from "../components/testPage/Timer";
//import QOneAnswer from "../components/testPage/QOneAnswer";
import QTable from "../components/testPage/QTable";
import useFetchData from "../hooks/useFetchData";
import QInputAnswer from "../components/testPage/QInputAnswer";

const TestPage = () => {
	const data = useFetchData(
		"https://63305deb591935f3c88e9057.mockapi.io/type_test"
	);

	return (
		<>
			<header>
				<h1>Тестирование по математике</h1>
				<Timer />
			</header>
			<Nav props={data} />
			<main>
				<QTable></QTable>
				<QInputAnswer></QInputAnswer>
				{/* <QOneAnswer></QOneAnswer> */}
			</main>
		</>
	);
};

export default TestPage;
