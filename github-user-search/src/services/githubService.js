import axios from "axios";


const apiUrl = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: apiUrl,
})

export const fetchUserData = async (username) => {
  try{
    //Making a Get request to github api
    const response = await api.get(`/${username}`);

    //returning the user data
    return response.data
  } catch (error) {
    console.error('Error fetching user data:', error.message)
    throw error
  }
}