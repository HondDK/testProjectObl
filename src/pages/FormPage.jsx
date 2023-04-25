import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
const FormPage = () => {

	

	const [user, setUser] = useState("");
	function handleChange(e) {
		const name = e.target.value;
		setUser(name);
	}

	function handleSubmit(e) {
		e.preventDefault();
		sessionStorage.setItem("user", user);
		console.log(user);
	}

	return (
		<>
			<header>
				<h1>Тестирование </h1>
			</header>
			<main>
				<article>
					<h1>Введите свои данные</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="POST-name">Введите фамилию, имя и отчество</label>
						<input
							id="POST-name"
							type="text"
							name="name"
							value={user}
							onChange={handleChange}
						></input>
						<input
							className="submit"
							type="submit"
							value="Начать тестирование"
						></input>
					</form>
				</article>
			</main>
		</>
	);
};

export default FormPage;
