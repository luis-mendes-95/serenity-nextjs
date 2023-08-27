import axios from 'axios';

const API_BASE_URL = 'https://localhost:3000/'; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const apiService = {
  async fetchData(endpoint: string) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
