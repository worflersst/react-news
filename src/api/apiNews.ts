import axios from "axios";
import {
  CategoriesApiResponce,
  NewsApiResponce,
  ParamsType,
} from "../interfaces";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_BASE_API_URL;

export const getNews = async (
  params?: ParamsType
): Promise<NewsApiResponce> => {
  try {
    const {
      page_number = 1,
      page_size = 10,
      category,
      keywords,
    } = params || {};
    const response = await axios.get<NewsApiResponce>(`${API_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};

export const getLatesNews = async (): Promise<NewsApiResponce> => {
  try {
    const response = await axios.get<NewsApiResponce>(`${API_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponce> => {
  try {
    const response = await axios.get<CategoriesApiResponce>(
      `${API_URL}available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: "", status: "error" };
  }
};
