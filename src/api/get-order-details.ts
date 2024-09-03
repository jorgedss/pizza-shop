import { OrderStatus } from '@/components/order-status'
import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrdersDetailsResponse {
  id: string
  createdAt: string
  totalInCents: number
  status: OrderStatus
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrdersDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
