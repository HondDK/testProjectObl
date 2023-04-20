import React, { useEffect, useState } from "react";
import QOneAnswerButton from "../UI/QOneAnswerButton";
import Intro from "./Intro";
import useFetchData from "../../hooks/useFetchData";

const QOneAnswer = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	const [selectedAnswers, setSelectedAnswers] = useState({});

	const handleAnswerClick = (questionId, answerId) => {
		setSelectedAnswers((prevState) => ({
			...prevState,
			[questionId]: answerId,
		}));
	};

	return (
		<>
			<article>{/* <Intro></Intro> */}</article>
			{data &&
				data.ordinary_questions &&
				data.ordinary_questions.length > 0 &&
				data.ordinary_questions.map((question) => (
					<section className="q_one_answer" key={question.uuid}>
						<p>{question.header}</p>
						<div className="q_one_answer_btn">
							{question.answers.map((answer) => (
								<QOneAnswerButton
									key={answer.uuid}
									onClick={() => handleAnswerClick(question.uuid, answer.uuid)}
									style={{
										backgroundColor:
											selectedAnswers[question.uuid] === answer.uuid
												? "rgba(13, 65, 21, 0.8)"
												: "rgba(89, 173, 103, 0.8)",
									}}
								>
									<span>{answer.text}</span>
								</QOneAnswerButton>
							))}
						</div>
					</section>
				))}
		</>
	);
};

export default QOneAnswer;
