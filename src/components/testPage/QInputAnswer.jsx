import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../../hooks/useFetchData";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const QInputAnswer = (props) => {
	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState([]);

	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	const [buttonDisabled, setButtonDisabled] = useState([]);
	function submit(index) {
		const article = {
			student_exam: props.uuid,
			question: "f05e5d11-35bc-4a38-8c8f-4eba2f3a1f96",
			text: answer,
		};
		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/original_question_user_answers/",
				article
			)
			.then((response) => setAnswerId(response.data.id));
		console.log(article);
		const newButtonDisabled = [...buttonDisabled];
		newButtonDisabled[index] = true;
		setButtonDisabled(newButtonDisabled);
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
								onClick={() => submit(index)}
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
