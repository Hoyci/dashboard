import { http, HttpResponse } from 'msw'

import { ApproveOrderParams } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderParams, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    console.log('oi')
    if (params.orderId === 'error-oder-id') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
