import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_BASE_API_URL

export const getNews = async () => {
	try {
		const response = await axios.get(`${API_URL}latest-news`, {
			params: {
				apiKey: API_KEY
			}
		})
		return response.data
	} catch (error) {
		console.log(error);
	}
}

