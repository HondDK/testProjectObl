import React from "react";
import useFetchData from "../../hooks/useFetchData";
const QInputAnswer = () => {
	const data = useFetchData(
		"https://63305deb591935f3c88e9057.mockapi.io/test_one_true_answer"
	);

	return (
		<>
			{data.map((item) => (
				<section className="q_input_answer">
					<p>{item.title}</p>
					<div className="q_input_answer_block">
						<span>{item.title}</span> <input /> <span>{item.title}</span>
					</div>
				</section>
			))}
		</>
	);
};

export default QInputAnswer;
