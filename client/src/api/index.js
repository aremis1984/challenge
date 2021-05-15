import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export const getTrackingsByEmail = payload => api.post(`/user-trackings`, payload).then(response => response.data)

const apis = {
    getTrackingsByEmail
}

export default apis