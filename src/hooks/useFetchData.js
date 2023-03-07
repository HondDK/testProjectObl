import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(url);
			setData(result.data);
		};
		fetchData();
	}, [url]);

	return data;
}

export default useFetchData;
