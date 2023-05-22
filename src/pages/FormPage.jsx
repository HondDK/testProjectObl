import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";
import { useDispatch } from "react-redux";

import {
	setStudent_examId,
	setId,
} from "../components/redux/redusers/formPageReduser";

const FormPage = () => {
	const { uuid } = useParams(); // retrieve the UUID from the URL
	const dispatch = useDispatch();
	
	const [user, setUser] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
	

	const data = useFetchData(
		`http://165.232.118.51:8000/edu_exams/exams/exams/${uuid}`
	);

	useEffect(() => {
		localStorage.clear();
	});

	function handleChange(e) {
		const name = e.target.value;
		setUser(name);
		if (name.trim() === "") {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (user.trim() === "") {
			alert("Введите фамилию, имя и отчество");
			return;
		}
		console.log(user);
	}

	function startTest() {
		const article = {
			user_name: user,
			exam: data.uuid,
		};

		axios
			.post(
				"http://165.232.118.51:8000/edu_exams/exams/student_exams/",
				article
			)
			.then((response) => {
				dispatch(setId(response.data.uuid));
				dispatch(setStudent_examId(response.data));
				//setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
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
							<button
								className="submit"
								onClick={startTest}
								disabled={isDisabled}
							>
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
