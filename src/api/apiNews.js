import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_BASE_API_URL

export const getNews = async ({ page_number = 1, page_size = 10, category }) => {
	try {
		const response = await axios.get(`${API_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category
			},
		});
		return response.data
	} catch (error) {
		console.log(error);
	}
}

export const getCategories = async () => {
	try {
		const response = await axios.get(`${API_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			},
		});
		return response.data
	} catch (error) {
		console.log(error);
	}
}

