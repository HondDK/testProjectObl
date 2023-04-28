import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const FormPage = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL
	const [user, setUser] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);

	function handleChange(e) {
		const name = e.target.value;
		setUser(name);
		if (name.trim() === "") {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
		sessionStorage.setItem("user", name);
	}
	let value = "Начать тестирование";
	function handleSubmit(e) {
		e.preventDefault();
		if (user.trim() === "") {
			alert("Введите фамилию, имя и отчество");
			return;
		}
		console.log(user);
	}

	return (
		<>
			<header className="header_form">
				<h1>Тестирование </h1>
			</header>
			<main>
				<article>
					<h1>Заполните поле перед началом тестирования</h1>

					<form onSubmit={handleSubmit}>
						<label htmlFor="POST-name">Введите фамилию, имя и отчество</label>
						<input
							id="POST-name"
							type="text"
							name="name"
							value={user}
							onChange={handleChange}
						></input>

						<NavLink to={isDisabled ? "#" : `/test_page/${uuid}`}>
							<button className="submit" disabled={isDisabled}>
								{isDisabled ? "Введите данные" : "Начать тестирование"}
							</button>
						</NavLink>
					</form>
				</article>
			</main>
		</>
	);
};

export default FormPage;
