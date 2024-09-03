import { api } from '@/lib/axios'

export interface CancelOrderetailsParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderetailsParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
