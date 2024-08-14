import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />

          {/* sr-only: visível apenas para leitores de tela */}

          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        563532ef3g5
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell className="">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Maria Castanhalis Bezerra Arantes
      </TableCell>
      <TableCell className="font-medium"> R$ 16252,82</TableCell>

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
