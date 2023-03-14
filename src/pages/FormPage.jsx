import React from "react";

const FormPage = () => {
	return (
		<>
			<header>
				<h1>Тестирование по математике</h1>
			</header>
			<main>
				<article>
					<h1>Введите свои данные</h1>
					<form>
						<label for="POST-name">Имя</label>
						<input id="POST-name" type="text" name="name"></input>
						<label for="POST-surname">Фамилия</label>
						<input id="POST-surname" type="text" name="surname"></input>
						<label for="POST-patronymic">Отчество</label>
						<input id="POST-patronymic" type="text" name="patronymic"></input>
						<label for="POST-school">Школа</label>
						<input id="POST-school" type="text" name="school"></input>
						<label for="POST-group">Класс</label>
						<input id="POST-group" type="text" name="group"></input>
						<input type="submit" value="Save">
							Продолжить
						</input>
					</form>
				</article>
			</main>
		</>
	);
};

export default FormPage;
