import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import { Link } from "react-router-dom";
const MainPage = () => {
	const data = useFetchData(
		"http://165.232.118.51:8000/edu_exams/exams/exams/"
	);
	useEffect(() => {
		localStorage.clear();
	}, []);
	return (
		<div>
			<h1>Все созданные тесты {data.count}</h1>
			<main>
				<div className="main_card_test">
					{data &&
						data.results &&
						data.results.map((item) => (
							<div key={item.uuid}>
								<Link to={`/form/${item.uuid}`}>
									<span>{item.name}</span>
									<p>
										Предмет: <span>{item.subject}</span>
									</p>
									<p>
										Учебное заведение: <span>{item.school}</span>
									</p>
								</Link>
							</div>
						))}
				</div>
			</main>
		</div>
	);
};

export default MainPage;
