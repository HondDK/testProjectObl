import React, { useState, useEffect } from "react";

const Timer = ({ hours, minutes, seconds }) => {
	const [timeLeft, setTimeLeft] = useState({
		hours: parseInt(sessionStorage.getItem("hours") || hours),
		minutes: parseInt(sessionStorage.getItem("minutes") || minutes),
		seconds: parseInt(sessionStorage.getItem("seconds") || seconds),
	});

	useEffect(() => {
		sessionStorage.setItem("hours", timeLeft.hours);
		sessionStorage.setItem("minutes", timeLeft.minutes);
		sessionStorage.setItem("seconds", timeLeft.seconds);

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
