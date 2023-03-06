import React, { useEffect, useState } from "react";
import axios from "axios";

const QOneAnswer = () => {
	const [qOneAnswer, setQOneAnswer] = useState([]);

	useEffect(() => {
		fetchQOneAnswer();
	}, []);
	async function fetchQOneAnswer() {
		try {
			const response = await axios.get(
				"https://63305deb591935f3c88e9057.mockapi.io/test_one_true_answer"
			);
			setQOneAnswer(response.data);
			console.log(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<>
			{qOneAnswer.map((data) => (
				<section className="q_one_answer">
					<p>{data.title}</p>
					<div className="answer">
						<div>
							<span>{123}</span>
						</div>
						<div>
							<span>{123}</span>
						</div>
						<div>
							<span>{123}</span>
						</div>
						<div>
							<span>{13}</span>
						</div>
					</div>
				</section>
			))}
		</>
	);
};

export default QOneAnswer;
