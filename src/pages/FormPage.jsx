import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FormPage = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL
	const [user, setUser] = useState("");
	function handleChange(e) {
		const name = e.target.value;
		setUser(name);
		sessionStorage.setItem("user", user);
		console.log(user);
	}

	function handleSubmit(e) {
		e.preventDefault();
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
						<Link to={`/test_page/${uuid}`}>
							<input
								className="submit"
								type="submit"
								value="Начать тестирование"
							></input>
						</Link>
					</form>
				</article>
			</main>
		</>
	);
};

export default FormPage;
