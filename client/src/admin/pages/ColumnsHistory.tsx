import { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table'
import { fetchData } from '@/utils/axiosInstance'
import { MoreHorizontal, ArrowUpDown, CircleUserRound } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    accessorKey: 'bookedBy', // Accédez à l'objet complet
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
      const bookedBy = row.getValue('bookedBy'); 
      const userName = bookedBy?.name || 'Utilisateur inconnu';
      return (
        <div className='flex items-center gap-2 flex-col' >
          <CircleUserRound color="#595959" className="mb-1" size={32} />
          <span>{userName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'bookedRoom.roomName',
    header: 'Espace Réservé'
  },
  {
    accessorKey: 'bookedDate',
    header: 'Date de Réservation',
    cell: ({ row }) => {
      const date = new Date(row.getValue('bookedDate'));
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
        ? 'border-green-700 text-green-700 font-extrabold font-[YujiMai]'  
        : currentStatus === 'pending'
        ? 'border-[#f0ad4e] text-[#f0ad4e] font-extrabold font-[YujiMai]' 
        : currentStatus === 'cancel'
        ? 'border-red-700 text-red-700 font-extrabold font-[YujiMai]' 
        : 'border-gray-300 text-gray-600'; 

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"
              className={`px-4 py-2 rounded-full border-2 ${statusColor} transition duration-300 ease-in-out hover:opacity-80`}
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
      const user = row.original;
      const token = localStorage.getItem("authToken");
      const [isDialogOpen, setIsDialogOpen] = useState(false);
  
      const handleDelete = async (id: string) => {
        try {
          const response = await fetchData(`/api/delete-booking?id=${id}`, 'DELETE', {}, {
            Authorization: `Bearer ${token}`,
          });
          if (response.status === 200) {
            alert('Réservation supprimée avec succès.');
            // window.location.reload();
          }
        } catch (error: any) {
          console.error("Erreur lors de la suppression :", error);
          alert("Une erreur s'est produite lors de la suppression. Veuillez réessayer.");
        }
      };
  
      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>More details</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(user._id)}>Supprimer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
  
          {/* Dialog component outside DropdownMenu */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='text-[#154849] text-2xl'>Détails de la réservation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 b-4">
                <p className='mb-4'>
                  <strong >Message :</strong> {user.message}
                </p>
                <p className='mb-4'>
                  <strong >Check-in :</strong> {new Date(user.checkInDate).toLocaleString()}
                </p>
                <p className='mb-4'>
                  <strong >Check-out :</strong> {new Date(user.checkOutDate).toLocaleString()}
                </p>
                <p className='mb-4'>
                  <strong>Numéro de téléphone :</strong> {user.bookedBy.phone}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </>
      );
    },
  }
  
  
]