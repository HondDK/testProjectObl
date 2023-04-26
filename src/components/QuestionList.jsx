import React from "react";

const QuestionList = ({
	questions,
	currentQuestionIndex,
	onSelectQuestion,
}) => {
	return (
		<div>
			{questions.map((question, index) => (
				<button
					key={question.uuid}
					onClick={() => onSelectQuestion(index)}
					disabled={index === currentQuestionIndex}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default QuestionList;
