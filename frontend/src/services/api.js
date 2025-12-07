import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const API_URL = `${API_BASE_URL}/api`;

export const api = {
  // 测试连接
  test: () => axios.get(`${API_URL}/test`),

  // 角色相关
  getCharacters: () => axios.get(`${API_URL}/characters`),

  getCharacter: (id) => axios.get(`${API_URL}/characters/${id}`),

  createCharacter: (data) => axios.post(`${API_URL}/characters`, data),

  deleteCharacter: (id) => axios.delete(`${API_URL}/characters/${id}`)
};