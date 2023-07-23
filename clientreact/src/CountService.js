// src/CountService.js
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api';  // for local development
const API_BASE_URL = '/api'; // for production

export const getCount = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/count`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const incrementCount = async () => {
  try {
    const response = await axios.put(`${API_BASE_URL}/increment`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
