import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://localhost:5001/api';

const api = axios.create({baseURL});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    if (config.headers) {
      config.headers.Authorization = `bearer ${token}`;
    }
  }
  return config;
});

export default api;
