import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import { OrderDetails } from '@/components/order-details'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

export interface OrderTableRowProps {
  order: {
    orderId: string
    createdAt: string | null
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />

              {/* sr-only: visível apenas para leitores de tela */}

              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt as string, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell className="">
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 flex h-3 w-3" />
          <span className="mb-0.5">Aprovar</span>
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 flex h-3 w-3" />
          <span className="mb-0.5">Cancelar</span>
        </Button>
      </TableCell>
    </TableRow>
  )
}
