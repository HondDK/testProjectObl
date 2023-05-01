import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = ({ hours, minutes, seconds, data }) => {
	const navigate = useNavigate();
	const [timeLeft, setTimeLeft] = useState({
		hours: data?.hours ?? hours,
		minutes: data?.minutes ?? minutes,
		seconds: data?.seconds ?? seconds,
	});

	useEffect(() => {
		const timer =
			timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
				? setTimeout(() => {
						if (timeLeft.seconds === 0) {
							if (timeLeft.minutes === 0) {
								if (timeLeft.hours === 0) {
									clearTimeout(timer);
								} else {
									setTimeLeft({
										hours: timeLeft.hours - 1,
										minutes: 59,
										seconds: 59,
									});
								}
							} else {
								setTimeLeft({
									hours: timeLeft.hours,
									minutes: timeLeft.minutes - 1,
									seconds: 59,
								});
							}
						} else {
							setTimeLeft({
								hours: timeLeft.hours,
								minutes: timeLeft.minutes,
								seconds: timeLeft.seconds - 1,
							});
						}
				  }, 1000)
				: undefined;

		if (
			timeLeft.hours === 0 &&
			timeLeft.minutes === 0 &&
			timeLeft.seconds === 1
		) {
			navigate(`/results_test/${data.uuid}`, { replace: true });
		}

		return () => clearTimeout(timer);
	}, [timeLeft]);

	const formattedTime = timeLeft
		? `${timeLeft.hours.toString().padStart(2, "0")}:${timeLeft.minutes
				.toString()
				.padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`
		: "";

	return (
		<div>
			<span className="timer-span">{formattedTime}</span>
		</div>
	);
};

export default Timer;
