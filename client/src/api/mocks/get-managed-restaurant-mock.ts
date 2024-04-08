import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'customer-restaurant-id',
    name: 'Pizza Shop',
    managerId: 'customer-user-id',
    description: 'A beautiful restaurant description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
