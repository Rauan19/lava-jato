import axios from 'axios'


const api = axios.create({
    baseURL: "https://lava-jato.onrender.com/"
})



api.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        localStorage.clear()
        window.location.href = '/login'
    }
})

export default api