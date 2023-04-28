import React, { useEffect, useState } from "react";
import axios from "axios";
import Timer from "../components/testPage/Timer";
import QOneAnswer from "../components/testPage/QOneAnswer";
import useFetchData from "../hooks/useFetchData";
import QInputAnswer from "../components/testPage/QInputAnswer";
import QComparisonQuestions from "../components/testPage/QComparisonQuestions";
import { Link, useParams } from "react-router-dom";
import HeaderLoader from "../components/UI/loaders/HeaderLoader";
import MainLoader from "../components/UI/loaders/MainLoader";
import { useSpring, animated } from "react-spring";

const TestPage = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	const [hoursToPass, setHoursToPass] = useState(0);
	const [minutesToPass, setMinutesToPass] = useState(0);
	const [secondsToPass, setSecondsToPass] = useState(0);

	useEffect(() => {
		if (data) {
			setHoursToPass(data.hours_to_pass || 0);
			setMinutesToPass(data.minutes_to_pass || 0);
			setSecondsToPass(data.seconds_to_pass || 0);
		}
	}, [data]);

	const [id, setId] = useState("");
	const [student_examId, setStudent_examId] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;
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
					setLoading(false);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [data]);

	const fadeIn = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 3500 },
	});

	const fadeBTN = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 5000 },
	});

	return (
		<div>
			{loading ? (
				<HeaderLoader />
			) : (
				<animated.div style={fadeIn}>
					<header>
						<h1>{data.name}</h1>
						<div className="timer">
							<Timer
								hours={hoursToPass}
								minutes={minutesToPass}
								seconds={secondsToPass}
							/>
						</div>
					</header>
				</animated.div>
			)}
			{loading ? (
				<MainLoader />
			) : (
				<>
					<animated.div style={fadeIn}>
						<main>
							<QComparisonQuestions></QComparisonQuestions>
							<QOneAnswer exam={student_examId.uuid}></QOneAnswer>
							<QInputAnswer exam={student_examId.uuid}></QInputAnswer>
							<animated.div style={fadeBTN}>
								<Link to={`/results_test/${data.uuid}`}>
									<button className="CloseTest">
										<span>Завершить тест</span>
									</button>
								</Link>
							</animated.div>
						</main>
					</animated.div>
				</>
			)}
		</div>
	);
};

export default TestPage;
