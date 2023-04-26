import React from "react";
import QInputAnswer from "../components/testPage/QInputAnswer";
import QComparisonQuestions from "../components/testPage/QComparisonQuestions";
import QOneAnswer from "../components/testPage/QOneAnswer";
const QuestionPage = ({ question, student_examId }) => {
	return (
		<div>
			<h1>{question.header}</h1>
			<p>{question.description}</p>
			<QComparisonQuestions></QComparisonQuestions>
			<QOneAnswer exam={student_examId}></QOneAnswer>
			<QInputAnswer exam={student_examId}></QInputAnswer>
		</div>
	);
};

export default QuestionPage;
