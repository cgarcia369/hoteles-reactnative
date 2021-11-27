import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL =
  'http://b4c1-2800-484-3577-dc60-7017-f9ba-aaf3-dd4.ngrok.io/api';

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
