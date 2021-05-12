import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getTrackingsByEmail = async (email) => {
    return await api.get(`/user-trackings/${email}`).then(response => response.data)
}

const apis = {
    getTrackingsByEmail
}

export default apis