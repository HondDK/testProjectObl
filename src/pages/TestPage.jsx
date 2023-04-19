import React, { useEffect, useState } from "react";

import Nav from "../components/testPage/Nav";
import Timer from "../components/testPage/Timer";
import QOneAnswer from "../components/testPage/QOneAnswer";
import QTable from "../components/testPage/QTable";
import useFetchData from "../hooks/useFetchData";
import QInputAnswer from "../components/testPage/QInputAnswer";
import QComparisonQuestions from "../components/testPage/QComparisonQuestions";

const TestPage = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32"
	);

	return (
		<>
			<header>
				<h1>{data.name}</h1>
				<Timer />
			</header>
			{/* <Nav props={data} /> */}
			<main>
				<QComparisonQuestions></QComparisonQuestions>
				{/* <QTable></QTable> */}
				{/* <QInputAnswer></QInputAnswer> */}
				{/* <QOneAnswer></QOneAnswer> */}
			</main>
		</>
	);
};

export default TestPage;
