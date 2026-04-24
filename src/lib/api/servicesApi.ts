import { apiClient } from './client'

export async function getServices() {
  const response = await apiClient.get('/services')
  return response.data
}

export async function getServiceById(id: string) {
  const response = await apiClient.get(`/services/${id}`)
  return response.data
}
