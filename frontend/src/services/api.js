import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
  // 测试连接
  test: () => axios.get(`${API_BASE_URL}/test`),

  // 角色相关
  getCharacters: () => axios.get(`${API_BASE_URL}/characters`),
  
  getCharacter: (id) => axios.get(`${API_BASE_URL}/characters/${id}`),
  
  createCharacter: (data) => axios.post(`${API_BASE_URL}/characters`, data),
  
  deleteCharacter: (id) => axios.delete(`${API_BASE_URL}/characters/${id}`)
};