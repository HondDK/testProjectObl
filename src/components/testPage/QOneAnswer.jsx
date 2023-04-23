import React, { useEffect, useState } from "react";
import QOneAnswerButton from "../UI/QOneAnswerButton";
import Intro from "./Intro";
import useFetchData from "../../hooks/useFetchData";
import axios from "axios";

const QOneAnswer = (props) => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState([]);

	const [buttonDisabled, setButtonDisabled] = useState([]);
	function submit(index, question, text) {
		const article = {
			student_exam: props.uuid,
			question: question.uuid,
			text: text,
		};
		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/ordinary_question_user_answers/",
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
			<article>{/* <Intro></Intro> */}</article>
			{data &&
				data.ordinary_questions &&
				data.ordinary_questions.length > 0 &&
				data.ordinary_questions.map((question, index) => (
					<section className="q_one_answer" key={question.uuid}>
						<p>{question.header}</p>
						<div className="q_one_answer_btn">
							{question.answers.map((answer) => (
								<button
									disabled={buttonDisabled[index]}
									key={answer.uuid}
									onClick={() => submit(index, question, answer.text)}
								>
									<span>{answer.text}</span>
								</button>
							))}
						</div>
					</section>
				))}
		</>
	);
};

export default QOneAnswer;
