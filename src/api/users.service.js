import { request } from './request'

export const fetchAllUsers = () => request('https://frontend-candidate.dev.sdh.com.ua/v1/contact/')

export const deleteUser = (id) => request(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${id}/`, {
  method: 'DELETE',
})

export const createUser = async (data) => {
  const response = await request('https://frontend-candidate.dev.sdh.com.ua/v1/contact/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json()
}

export const editUser = async (data) => {
  console.log(data)
  const response = await request(`https://frontend-candidate.dev.sdh.com.ua/v1/contact/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log(response)

  return response.json()
}
