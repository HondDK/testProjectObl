// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
// 	setHoursToPass,
// 	setMinutesToPass,
// 	setSecondsToPass,
// } from "../redux/testPageSlice";

// const Timer = ({ data }) => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const hoursToPass = useSelector((state) => state.testPage.hoursToPass);
// 	const minutesToPass = useSelector((state) => state.testPage.minutesToPass);
// 	const secondsToPass = useSelector((state) => state.testPage.secondsToPass);

// 	useEffect(() => {
// 		if (data) {
// 			dispatch(setHoursToPass(data.hours_to_pass));
// 			dispatch(setMinutesToPass(data.minutes_to_pass));
// 			dispatch(setSecondsToPass(data.seconds_to_pass));
// 		}
// 	}, [data]);

// 	const [timeLeft, setTimeLeft] = useState({
// 		hours: hoursToPass,
// 		minutes: minutesToPass,
// 		seconds: secondsToPass,
// 	});

// 	useEffect(() => {
// 		const timer =
// 			timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0
// 				? setTimeout(() => {
// 						if (timeLeft.seconds === 0) {
// 							if (timeLeft.minutes === 0) {
// 								if (timeLeft.hours === 0) {
// 									clearTimeout(timer);
// 								} else {
// 									setTimeLeft({
// 										hours: timeLeft.hours - 1,
// 										minutes: 59,
// 										seconds: 59,
// 									});
// 									dispatch(setHoursToPass(timeLeft.hours - 1));
// 								}
// 							} else {
// 								setTimeLeft({
// 									hours: timeLeft.hours,
// 									minutes: timeLeft.minutes - 1,
// 									seconds: 59,
// 								});
// 								dispatch(setMinutesToPass(timeLeft.minutes - 1));
// 							}
// 						} else {
// 							setTimeLeft({
// 								hours: timeLeft.hours,
// 								minutes: timeLeft.minutes,
// 								seconds: timeLeft.seconds - 1,
// 							});
// 							dispatch(setSecondsToPass(timeLeft.seconds - 1));
// 						}
// 				  }, 1000)
// 				: undefined;

// 		if (
// 			timeLeft.hours === 0 &&
// 			timeLeft.minutes === 0 &&
// 			timeLeft.seconds === 1
// 		) {
// 			navigate(`/results_test/${data.uuid}`, { replace: true });
// 		}

// 		return () => clearTimeout(timer);
// 	}, [timeLeft]);

// 	const formattedTime = timeLeft
// 		? `${timeLeft.hours?.toString().padStart(2, "0")}:${timeLeft.minutes
// 				?.toString()
// 				.padStart(2, "0")}:${timeLeft.seconds?.toString().padStart(2, "0")}`
// 		: "";

// 	return (
// 		<div>
// 			<span className="timer-span">{formattedTime}</span>
// 		</div>
// 	);
// };

// export default Timer;
