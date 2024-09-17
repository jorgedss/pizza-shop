import { http, HttpResponse } from 'msw'

import { CancelOrderetailsParams } from '../cancel-order'

export const canncelOrderMock = http.patch<
  CancelOrderetailsParams,
  never,
  never
>('/orders/:orderId/cancel', async ({ params }) => {
  if (params.orderId === 'error-order-id') {
    return new HttpResponse(null, { status: 400 })
  }

  return new HttpResponse(null, { status: 204 })
})
