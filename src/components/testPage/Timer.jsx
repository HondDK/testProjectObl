import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ hours, minutes, seconds }) => {
	const [timeLeft, setTimeLeft] = useState({
		hours: parseInt(hours),
		minutes: parseInt(minutes),
		seconds: parseInt(seconds),
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

		return () => clearTimeout(timer);
	}, [timeLeft]);

	return (
		<div>
			<span className="timer-span">
				{timeLeft.hours.toString().padStart(2, "0")}:
				{timeLeft.minutes.toString().padStart(2, "0")}:
				{timeLeft.seconds.toString().padStart(2, "0")}
			</span>
		</div>
	);
};

export default Timer;
