import { http, HttpResponse } from 'msw'

import { GetPopularProductsOrdersAmountResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsOrdersAmountResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Banana', amount: 3 },
    { product: 'Apple', amount: 5 },
    { product: 'Potato', amount: 8 },
    { product: 'Pizza', amount: 1 },
    { product: 'Hamburger', amount: 3 },
  ])
})
