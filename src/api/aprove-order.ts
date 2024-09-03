import { api } from '@/lib/axios'

export interface ApproveOrderetailsParams {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderetailsParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
