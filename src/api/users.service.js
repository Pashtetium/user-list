import { request } from './request'

export const fetchAllUsers = () => request('https://frontend-candidate.dev.sdh.com.ua/v1/contact/')

export const deleteUser = (id) => fetch(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`, {
  method: 'DELETE',
})

export const createUser = async (data) => {
  const response = await fetch('https://frontend-candidate.dev.sdh.com.ua/v1/contact/', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    body: JSON.stringify(data),
  })

  return response.json()
}
