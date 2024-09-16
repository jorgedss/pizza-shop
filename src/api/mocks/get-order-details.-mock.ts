import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Joh Fanih',
      email: 'jfexample@example.com',
      phone: '83989574628',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 1800,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Temaki' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 800,
        product: { name: 'Pizza Nordestina' },
        quantity: 1,
      },
    ],
  })
})
