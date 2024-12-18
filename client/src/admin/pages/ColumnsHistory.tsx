import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table'
import { fetchData } from '@/utils/axiosInstance'
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
    header: `Date d'Arrivée`,
    cell: ({ row }) => {
      const date = new Date(row.getValue('checkInDate'));
      
      // Format de la date : 04/01/2024
      const day = String(date.getDate()).padStart(2, '0');  
      const month = String(date.getMonth() + 1).padStart(2, '0');  
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      
      // Format de l'heure : 00:00
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      
      return (
        <div>
          <div>{formattedDate}, {formattedTime}</div>
        </div>
      );
    },
  },
  {
    accessorKey: 'checkOutDate',
    header: 'Date de Départ',
    cell: ({ row }) => {
      const date = new Date(row.getValue('checkOutDate'));
      
      // Format de la date : 04/01/2024
      const day = String(date.getDate()).padStart(2, '0'); 
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      
      // Format de l'heure : 00:00
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      
      return (
        <div>
          <div>{formattedDate}, {formattedTime}</div>
        </div>
      );
    },
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
    header: 'status',
    cell: ({ row }) => {
      const [currentStatus, setCurrentStatus] = useState<string | undefined>(row.getValue('status'));
      const token = localStorage.getItem("authToken"); 
      // Fonction pour changer le statut
      const handleStatusChange = async (newStatus: string) => {
        try {
          setCurrentStatus(newStatus); 
          const response = await fetchData(
            `/api/booking/${row.original._id}`, 
            'PATCH',
            { status: newStatus }, 
            { Authorization: `Bearer ${token}` } 
          );
          console.log('Statut mis à jour avec succès', response.data);
        } catch (error:any) {
          console.error('Erreur:', error.response?.data || error.message);
          alert(
            error.response?.data?.message || 'Impossible de changer le statut, réessayez plus tard.'
          );
        }
      };
       // Définir les styles de couleur selon le statut
    const statusColor =
    currentStatus === 'confirm'
      ? 'bg-green-700 text-white'
      : currentStatus === 'pending'
      ? 'bg-[#f0ad4e] text-white'
      : currentStatus === 'cancel'
      ? 'bg-red-700 text-white'
      : 'bg-gray-200 text-black';

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"
              className={`px-4 py-2 rounded-full font-semibold ${statusColor} transition duration-300 ease-in-out hover:opacity-80`}
              >{currentStatus || "Status"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleStatusChange('confirm')}>
              Confirmed
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleStatusChange('pending')}>
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleStatusChange('cancel')}>
              Cancelled
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
  }},


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