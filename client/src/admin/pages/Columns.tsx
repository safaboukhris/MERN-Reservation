import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown, CircleUserRound,  } from 'lucide-react'

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
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Utilisateur
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const bookedBy = row.getValue('name'); 
      const userName = bookedBy || 'Utilisateur inconnu';       
      return (
        <div className="flex items-center gap-2 flex-col">
          <CircleUserRound color="#595959" className="mb-1" size={32} /> 
          <span>{userName}</span>
        </div>
      );
    }
  },
  
  {
    accessorKey: 'lastname',
    header: 'Nom de famille',
    cell: ({ row }) => {
      const bookedBy = row.getValue('lastname'); 
      const userName = bookedBy || 'Utilisateur inconnu'; 
      
      return (
        <div className="flex items-center gap-2 flex-col">
          <CircleUserRound color="#595959" className="mb-1" size={32} /> 
          <span>{userName}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'phone',
    header: 'Num Tél',
    
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Rôle'
  },
  {
    accessorKey: 'createdAt',
    header: 'Compte créé le',
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
      // Formatting the date to include time (hour and minute)
      const formatted = date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24-hour format
      });
      const formattedWithDash = formatted.replace(/(\d{4})/, '$1-');
      return <div className="font-medium">{formattedWithDash}</div>;
    },
    
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