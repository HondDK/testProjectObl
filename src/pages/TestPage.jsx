import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/testPage/Nav";
import Timer from "../components/testPage/Timer";
import QOneAnswer from "../components/testPage/QOneAnswer";
import useFetchData from "../hooks/useFetchData";
import QInputAnswer from "../components/testPage/QInputAnswer";
import QComparisonQuestions from "../components/testPage/QComparisonQuestions";
import { Link, useParams } from "react-router-dom";

const TestPage = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	const [hoursToPass, setHoursToPass] = useState(0);
	const [minutesToPass, setMinutesToPass] = useState(30);

	useEffect(() => {
		if (data) {
			setHoursToPass(data.hours_to_pass);
			setMinutesToPass(data.minutes_to_pass);
		}
	}, [data]);

	const [isMounted, setIsMounted] = useState(false);
	const [id, setId] = useState("");
	const [student_examId, setStudent_examId] = useState({});

	useEffect(() => {
		if (isMounted && data) {
			const article = {
				user_name: sessionStorage.getItem("user"),
				exam: data.uuid,
			};
			axios
				.post(
					"http://165.232.118.51:8000/edu_exams/exams/student_exams/",
					article
				)
				.then((response) => {
					setId(response.data.uuid);
					setStudent_examId(response.data);
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
				<Timer hours={hoursToPass} minutes={minutesToPass} seconds={0} />
			</header>

			<main>
				<QComparisonQuestions></QComparisonQuestions>
				<QOneAnswer exam={student_examId.uuid}></QOneAnswer>
				<QInputAnswer exam={student_examId.uuid}></QInputAnswer>
				<Link to={`/results_test/${data.uuid}`}>
					<button className="CloseTest">Завершить тест</button>
				</Link>
			</main>
		</>
	);
};

export default TestPage;
