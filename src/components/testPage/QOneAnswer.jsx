import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import axios from "axios";
import { useParams } from "react-router-dom";
const QOneAnswer = (props) => {
	const { uuid } = useParams(); // retrieve the UUID from the URL

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	const [answerId, setAnswerId] = useState();
	const [answer, setAnswer] = useState([]);

	const [buttonDisabled, setButtonDisabled] = useState([]);
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
				.then((response) => setAnswerId(response.data.id));
			const newButtonDisabled = [...buttonDisabled];
			newButtonDisabled[index] = true;
			setButtonDisabled(newButtonDisabled);
		} catch (err) {
			console.log(article);
		}
		console.log(article);
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
						<p className="QOneAnswerDescription">{question.description}</p>
						{question.files.map((file) => (
							<img
								src={"http://165.232.118.51:8000/edu_exams/" + file.file}
								alt=""
							/>
						))}
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
