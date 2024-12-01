import axios from 'axios';
import { baseURL } from '../config/config';

// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.104:49387';

// Create an instance of Axios
const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include authentication token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Fetch token from localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));

api.interceptors.response.use((response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken'); // Clear expired token
            window.location.href = '/login'; // Redirect to login
        }
        return Promise.reject(error);
    }
);


// Example: Login API
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/api/auth/login', credentials);
        return response.data; // Return the response payload
    } catch (error) {
        console.error('Error logging in:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};

// Example: Fetch dashboard data
export const fetchDashboardData = async () => {
    try {
        const response = await api.get('/dashboard');
        return response.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error.response?.data || error.message);
        throw error.response?.data || error.message;
    }
};
