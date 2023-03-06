import React, { useEffect, useState } from "react";
import axios from "axios";
import QOneAnswerButton from "../UI/QOneAnswerButton";

const QOneAnswer = () => {
	const [qOneAnswer, setQOneAnswer] = useState([]);

	useEffect(() => {
		fetchQOneAnswer();
	}, []);
	async function fetchQOneAnswer() {
		try {
			const response = await axios.get(
				"https://63305deb591935f3c88e9057.mockapi.io/test_one_true_answer"
			);
			setQOneAnswer(response.data);
			console.log(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<>
			<article>
				<span>Прочитай текст внимательно!</span>
				<div className="main_text">
					<p>
						Ботаника - это наука, которая изучает растения. "Ботанэ" в переводе
						с греческого обозначает растение. Ботаника относится к биологическим
						наукам. Биология (от греч. «биос» — жизнь) изучает все живые
						организмы. Живущие на Земле клеточные организмы делятся на четыре
						царства – это Растения, Животные, Бактерии и Грибы. Как уже было
						сказано, ботаника изучает только растения. Животных изучает
						зоология, бактерий - микробиология, грибы - микология. Ботаника
						возникла в древности (III в. до н. э.) и по-началу изучала также
						грибы и бактерии. Бактерии и грибы были выделены в отдельные царства
						в ХХ в., когда удалось с помощью мощных увеличительных приборов
						увидеть их огромные отличия от растений. Царство растений включает
						около 350 тысяч видов.
					</p>
				</div>
				<img src="" alt="" />
			</article>
			{qOneAnswer.map((data) => (
				<section className="q_one_answer">
					<p>{data.title}</p>
					<div className="answer">
						{qOneAnswer.map((data) => (
							<QOneAnswerButton>{data.id}</QOneAnswerButton>
						))}
					</div>
				</section>
			))}
		</>
	);
};

export default QOneAnswer;
