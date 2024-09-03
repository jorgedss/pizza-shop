import { api } from '@/lib/axios'

export interface DeliverOrderetailsParams {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderetailsParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
