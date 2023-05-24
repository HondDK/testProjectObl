import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import shuffleAnswers from "../../func/shuffleAnswers";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	setAnswerId,
	setButtonDisabled,
	setSelectedAnswer,
} from "../redux/redusers/qOneAnswerReducer";

const QOneAnswer = (props) => {
	const { uuid } = useParams();

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	const dispatch = useDispatch();
	const { answerId, answer, selectedAnswer, buttonDisabled } = useSelector(
		(state) => state.qOneAnswer
	);
	function submit(index, question, text) {
		const article = {
			student_exam: props.exam,
			question: question.uuid,
			text: text,
		};
		try {
			axios
				.post(
					"http://165.232.118.51:8000/edu_exams/exams/ordinary_question_user_answers/",
					article
				)
				.then((response) => dispatch(setAnswerId(response.data.id)));

			const newButtonDisabled = [...buttonDisabled];
			newButtonDisabled[index] = true;
			dispatch(setButtonDisabled(newButtonDisabled));

			const newSelectedAnswer = [...selectedAnswer];
			newSelectedAnswer[index] = text;
			dispatch(setSelectedAnswer(newSelectedAnswer));
		} catch (err) {
			console.log(article);
		}
		console.log(article);
	}

	return (
		<>
			{data &&
				data.ordinary_questions &&
				data.ordinary_questions.length > 0 &&
				data.ordinary_questions.map((question, index) => {
					const shuffledAnswers = shuffleAnswers([...question.answers]);
					return (
						<section className="q_one_answer" key={question.uuid}>
							<p>{question.header}</p>
							<p className="QOneAnswerDescription">{question.description}</p>
							{question.files.map((file) => (
								<img
									src={"http://165.232.118.51:8000/edu_exams/" + file.file}
									alt=""
									key={file.uuid}
								/>
							))}
							<div className="q_one_answer_btn">
								{shuffledAnswers.map((answer) => (
									<button
										className={
											selectedAnswer[index] === answer.text ? "selected" : ""
										}
										disabled={buttonDisabled[index]}
										key={answer.uuid}
										onClick={() => submit(index, question, answer.text)}
									>
										<span>{answer.text}</span>
									</button>
								))}
							</div>
						</section>
					);
				})}
		</>
	);
};

export default QOneAnswer;
