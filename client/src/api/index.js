import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getTrackings = async () => {
    return await api.get('/trackings').then(response => response.data)
}

export const getTrackingsByEmail = async (email) => {
    return await api.get(`/user-trackings/${email}`).then(response => response.data)
}

export const getCheckpoints = async () => {
    return await api.get('/checkpoints').then(response => response.data)
}

export const getCheckpointsByTracking = async (tracking) => {
    return await api.get(`/checkpoints-tracking/${tracking}`).then(response => response.data)
}

const apis = {
    getTrackings,
    getCheckpoints,
    getTrackingsByEmail,
    getCheckpointsByTracking
}

export default apis