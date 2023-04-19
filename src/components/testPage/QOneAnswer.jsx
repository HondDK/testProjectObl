import React, { useEffect, useState } from "react";
import QOneAnswerButton from "../UI/QOneAnswerButton";
import Intro from "./Intro";
import useFetchData from "../../hooks/useFetchData";
const QOneAnswer = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/1feba260-81ca-4003-96a6-a12353c94e32/"
	);

	return (
		<>
			<article>
				{/* <Intro></Intro> */}
			</article>
			{data &&
				data.ordinary_questions &&
				data.ordinary_questions.map((item) => (
					<section className="q_one_answer" key={item.uuid}>
						<p>{item.header}</p>
						<div className="q_one_answer_btn">
							{item.answers.map((answer) => (
								<QOneAnswerButton key={answer.uuid}>
									{answer.text}
								</QOneAnswerButton>
							))}
						</div>
					</section>
				))}
		</>
	);
};

export default QOneAnswer;
