import axios from 'axios'

export const fetchAllUsers = () => axios.get('https://frontend-candidate.dev.sdh.com.ua/v1/contact/')

export const deleteUser = (id) => axios.delete(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`)

export const createUser = (data) => axios.post('https://frontend-candidate.dev.sdh.com.ua/v1/contact/', data)

export const editUser = (data) => axios.put(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${data.id}`, data)
