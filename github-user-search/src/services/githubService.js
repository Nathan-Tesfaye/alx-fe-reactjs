import axios from "axios";

const forChecker = 'https://api.github.com'
const apiUrl = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: apiUrl,
})

export const fetchUserData = async (username, location, minRepos) => {
  try{

    //construct the search query
    let query = ""

    if (username) query += `${username} in:login`
    if (location) query += ` location:${location}`
    if (minRepos) query += ` repos:>${minRepos}`

    //Making a Get request to github search  api
    const response = await api.get(`/search/users?q=${encodeURIComponent(query)}`)
    
    //returning the user data .items used because data returened contains an object with the key items which contains user detail we need
    return response.data.items
  } catch (error) {
    console.error('Error fetching user data:', error.message)
    throw error
  }
}