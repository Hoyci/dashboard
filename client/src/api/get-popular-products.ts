import { api } from '@/lib/axios'

export type GetPopularProductsOrdersAmountResponse = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsOrdersAmountResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
