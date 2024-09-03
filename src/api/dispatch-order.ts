import { api } from '@/lib/axios'

export interface DispatchOrderetailsParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderetailsParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
