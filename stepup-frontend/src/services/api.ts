import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:8000/api/v1' })

export async function getProducts(){
  const res = await api.get('/produtos')
  return res.data
}

export default api
