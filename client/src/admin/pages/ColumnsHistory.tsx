import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'


export const columns: ColumnDef<any>[] = [
    {
    accessorKey: 'bookedBy.name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Utilisateur
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'bookedRoom.roomName',
    header: 'Espace Réservé'
  },
  {
    accessorKey: 'message',
    header: 'Message',
    
  },
  {
    accessorKey: 'bookedBy.phone',
    header: 'Numéro de Téléphone',
    
  },
  {
    accessorKey: 'checkInDate',
    header: `Date d'Arrivée`
  },
  {
    accessorKey: 'checkOutDate',
    header: 'Date de Départ',
    
  },
  {
    accessorKey: 'bookedDate',
    header: 'Date de Réservation',
    cell: ({ row }) => {
      const date = new Date(row.getValue('bookedDate'))
      const formatted = date.toLocaleDateString()
      return <div className='font-medium'>{formatted}</div>
    }
  },
  {
    accessorKey: 'status',
    header: 'status'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user._id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenu >
              Delete
            </DropdownMenu>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]