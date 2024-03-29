import React from "react";
import axios from "axios";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
	setAnswerId,
	setAnswer,
	setButtonDisabled,
} from "../redux/reducers/qInputAnswerReduсer";

const QInputAnswer = (props) => {
	const dispatch = useDispatch();

	const { answerId, answer, buttonDisabled } = useSelector(
		(state) => state.qInputAnswer
	);

	const { uuid } = useParams();

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	function submit(index, question) {
		const article = {
			student_exam: props.exam,
			question: question.uuid,
			text: answer,
		};
		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/original_question_user_answers/",
				article
			)
			.then((response) => {
				dispatch(setAnswerId(response.data.id));
				const newButtonDisabled = [...buttonDisabled];
				newButtonDisabled[index] = true;
				dispatch(setButtonDisabled(newButtonDisabled));
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
							<input
								onChange={(e) => dispatch(setAnswer(e.target.value))}
								value={answer[answerId]}
							/>
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
