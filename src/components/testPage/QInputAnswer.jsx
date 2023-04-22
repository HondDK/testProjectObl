import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../../hooks/useFetchData";

const QInputAnswer = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState("");
	const [student_examId, setStudent_examId] = useState("");
	const [uuid, setUuid] = useState("");

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
				.then((response) => {
					setUuid(response.data.uuid);
					setStudent_examId(response.data.exam);
					console.log(response.data.uuid);
					console.log(response.data.exam);
				});
		}
	}, [data]);

	function submit() {
		const article = {
			student_exam: uuid,
			question: student_examId,
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
