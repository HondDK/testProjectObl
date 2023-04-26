import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
			<header>
				<h1>Тестирование </h1>
			</header>
			<main>
				<article>
					{isDisabled ? (
						<h1>Введите свои данные</h1>
					) : (
						<h1>Проверьте правильность ФИО перед началом теста</h1>
					)}
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
								value={value}
								disabled={isDisabled}
							></input>
						</Link>
					</form>
				</article>
			</main>
		</>
	);
};

export default FormPage;
