import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('auth-token')

    return axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://srp-my-garage.herokuapp.com/api',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}