import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import CardComparisonQuestions from "../UI/CardComparisonQuestions";
import { useParams } from "react-router-dom";

const QComparisonQuestions = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL
	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	return (
		<>
			{data &&
				data.comparison_questions &&
				data.comparison_questions.map((item) => (
					<section className="q_one_answer" key={item.uuid}>
						<p>{item.header}</p>
						<div className="card_comparison_questions">
							{item.options.map((answer) => (
								<CardComparisonQuestions key={answer.uuid}>
									{answer.text}
								</CardComparisonQuestions>
							))}
							{item.option_answers.map((answer) => (
								<CardComparisonQuestions key={answer.uuid}>
									{answer.text}
								</CardComparisonQuestions>
							))}
						</div>
					</section>
				))}
		</>
	);
};

export default QComparisonQuestions;
