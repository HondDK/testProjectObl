import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RefreshGoBack = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Обработчик события обновления страницы
		const handlePageRefresh = () => {
			navigate(-1); // Перенаправление назад
		};

		// Подписываемся на событие обновления страницы
		window.addEventListener("beforeunload", handlePageRefresh);

		return () => {
			// Отписываемся от события при размонтировании компонента
			window.removeEventListener("beforeunload", handlePageRefresh);
		};
	}, [navigate]);

	return <></>;
};

export default RefreshGoBack;
