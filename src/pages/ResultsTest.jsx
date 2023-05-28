import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";

const ResultsTest = () => {
	const { student_examId, user } = useSelector((state) => state.formPage);

	const { ex_name } = useSelector((state) => state.testPage);

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/student_exams/${student_examId.uuid}/results`
	);
	console.log(data);
	return (
		<>
			<h1>Результаты теста по {ex_name}</h1>
			<main className="test_results">
				<h1>{user}</h1>
				<p>Набранные баллы:{data.points}</p>
				<p>Максимально возможное количество балло: {data.max_points}</p>
				<p>
					Остаток времени: {data.hours_pass}:{data.minutes_pass}:
					{data.seconds_pass}
				</p>
			</main>
		</>
	);
};

export default ResultsTest;
