import axios from 'axios';

// Base API URL (Change it as per your backend)
const API_BASE_URL = 'https://api.restful-api.dev/';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Common GET request
export const getData = async (endpoint, params = {}) => {
  try {
    console.log('endPoint :>> ', endpoint);
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.log('error :>> ', error);
    console.error('GET Error:', error.response?.data || error.message);
    throw error;
  }
};

// Common POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST Error:', error.response?.data || error.message);
    throw error;
  }
};

// Common DELETE request
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE Error:', error.response?.data || error.message);
    throw error;
  }
};

// Request Interceptor
api.interceptors.request.use((request) => {
    console.log('Request:', request);
    return request;
  }, (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  });
  
  // Response Interceptor
  api.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
  }, (error) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  });
export default api;
