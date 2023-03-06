import React from "react";
import NavButton from "../UI/NavButton";

const Nav = ({ props }) => {
	return (
		<nav>
			{props.map((date) => (
				<NavButton>{date.id}</NavButton>
			))}
		</nav>
	);
};

export default Nav;
