import React from "react";

const QOneAnswerButton = (props) => {
	return (
		<div style={props.style} onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export default QOneAnswerButton;
