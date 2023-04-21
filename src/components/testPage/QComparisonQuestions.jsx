import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import CardComparisonQuestions from "../UI/CardComparisonQuestions";

const QComparisonQuestions = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	return (
		<>
			{data &&
				data.comparison_questions &&
				data.comparison_questions.map((item) => (
					<section className="q_one_answer" key={item.uuid}>
						<p>{item.header}</p>
						<div className="card_comparison_questions">
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
