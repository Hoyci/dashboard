import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '5521999999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2400,
        product: { name: 'Pizza de Mussarela' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: { name: 'Pizza de Frango' },
        quantity: 1,
      },
    ],
    totalInCents: 2500,
  })
})
