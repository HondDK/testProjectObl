import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../../hooks/useFetchData";

const QInputAnswer = (props) => {
	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState([]);

	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/e6dbf7bc-95ec-4039-b450-99f898f88d9a/"
	);

	const [buttonDisabled, setButtonDisabled] = useState([]);
	function submit(index, question) {
		const article = {
			student_exam: props.uuid,
			question: question.uuid,
			text: answer,
		};
		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/original_question_user_answers/",
				article
			)
			.then((response) => {
				setAnswerId(response.data.id);
				const newButtonDisabled = [...buttonDisabled];
				newButtonDisabled[index] = true;
				setButtonDisabled(newButtonDisabled);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(article);
	}

	return (
		<>
			{data &&
				data.original_questions &&
				data.original_questions.map((item, index) => (
					<section className="q_input_answer">
						<p>{item.header}</p>
						<span className="description">{item.description}</span>
						<div className="q_input_answer_block">
							<input onChange={(e) => setAnswer(e.target.value)} />
							<button
								disabled={buttonDisabled[index]}
								onClick={() => submit(index, item)}
							>
								Готово
							</button>
						</div>
					</section>
				))}
		</>
	);
};

export default QInputAnswer;
