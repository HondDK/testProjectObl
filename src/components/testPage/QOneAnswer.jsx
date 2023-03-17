import React, { useEffect, useState } from "react";
import QOneAnswerButton from "../UI/QOneAnswerButton";
import Intro from "./Intro";
import useFetchData from "../../hooks/useFetchData";
const QOneAnswer = () => {
	const data = useFetchData(
		"https://63305deb591935f3c88e9057.mockapi.io/test_one_true_answer"
	);

	return (
		<>
			<article>
				<Intro></Intro>
			</article>
			{data.map((item) => (
				<section className="q_one_answer">
					<p>{item.title}</p>
					<div className="q_one_answer_btn">
						{data.map((item) => (
							<QOneAnswerButton>{item.id}</QOneAnswerButton>
						))}
					</div>
				</section>
			))}
		</>
	);
};

export default QOneAnswer;
