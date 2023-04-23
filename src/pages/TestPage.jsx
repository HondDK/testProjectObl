import React, { useEffect, useState } from "react";
import axios from "axios";
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

	const [timeToPass, setTimeToPass] = useState({
		hours_to_pass: 1,
		minutes_to_pass: 0,
		seconds_to_pass: 0,
	});

	useEffect(() => {
		setTimeToPass({
			hours_to_pass: data.hours_to_pass,
			minutes_to_pass: data.minutes_to_pass,
			seconds_to_pass: data.seconds_to_pass,
		});
	}, []);

	const [isMounted, setIsMounted] = useState(false);
	const [student_examId, setStudent_examId] = useState("");
	const [uuid, setUuid] = useState("");
	useEffect(() => {
		if (isMounted && data) {
			const article = {
				user_name: "test",
				exam: data.uuid,
			};
			axios
				.post(
					"http://165.232.118.51:8000/edu_exams/exams/student_exams/",
					article
				)
				.then((response) => {
					setUuid(response.data.uuid);
					setStudent_examId(response.data.exam);
					console.log(response.data.uuid);
					console.log(response.data.exam);
				});
		} else {
			setIsMounted(true);
		}
	}, [data]);

	return (
		<>
			<header>
				<h1>{data.name}</h1>
				<Timer
					hours={timeToPass.hours_to_pass}
					minutes={timeToPass.minutes_to_pass}
					seconds={timeToPass.seconds_to_pass}
				/>
			</header>
			{/* <Nav props={data} /> */}
			<main>
				<QComparisonQuestions></QComparisonQuestions>
				{/* <QTable></QTable> */}

				<QInputAnswer uuid={uuid}></QInputAnswer>
				<QOneAnswer uuid={uuid}></QOneAnswer>
			</main>
		</>
	);
};

export default TestPage;
