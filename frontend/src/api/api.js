import axios from "axios";

const BASE_URL = "https://task-1-1-ru7x.onrender.com/api";

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const addUser = (name) => axios.post(`${BASE_URL}/users`, { name });
export const claimPoints = (userId) => axios.post(`${BASE_URL}/claim`, { userId });
export const getLeaderboard = () => axios.get(`${BASE_URL}/users/leaderboard`);
export const getClaimHistory = () => axios.get(`${BASE_URL}/claim/history`);
