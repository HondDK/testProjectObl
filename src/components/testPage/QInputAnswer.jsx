import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../../hooks/useFetchData";

const QInputAnswer = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		if (data) {
			const article = {
				user_name: "artem",
				exam: data.uuid,
			};
			axios
				.post(
					"http://165.232.118.51:8000/edu_exams/exams/student_exams/",
					article
				)
				.then((response) => console.log(response));
		}
	}, [data]);

	function submit() {
		const article = {
			student_exam: "0aced5c5-7d3f-48bd-951b-eb80c1101595",
			question: "d3c12820-8487-4927-9aa9-f571b72b65aa",
			text: answer,
		};
		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/original_question_user_answers/",
				article
			)
			.then((response) => setAnswerId(response.data.id));
		console.log(article);
	}

	return (
		<>
			{data &&
				data.original_questions &&
				data.original_questions.map((item) => (
					<section className="q_input_answer">
						<p>{item.header}</p>
						<span className="description">{item.description}</span>
						<div className="q_input_answer_block">
							<input onChange={(e) => setAnswer(e.target.value)} />
							<button onClick={submit}>Готово</button>
						</div>
					</section>
				))}
		</>
	);
};

export default QInputAnswer;
