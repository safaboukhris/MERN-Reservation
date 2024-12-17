import { Armchair } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DateTimePicker } from "./date-time-picker"
import { useState } from "react"
import { fetchData } from "@/utils/axiosInstance"
import { useLocation, useNavigate } from "react-router-dom"



const ButtonBooking = ({ className }: { className?: string }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    const roomId = search.get("id");

    const [checkInDate , setCheckInDate] = useState<Date>();
    const [checkOutDate , setcheckOutDate] = useState<Date>();
    const [message, setMessage] = useState<string>("");
    const token = localStorage.getItem("authToken")

     //fetching data from the api 
    const booking = async () =>{
        const res = await fetchData("/api/addbooking", 'POST', { bookedRoom: roomId, checkInDate, checkOutDate, message}, { Authorization: `Bearer ${token}`})
        if( res.status === 200){
            alert(res.data.msg)
            navigate("/history")
        }
    }

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <button className={`hover:bg-[#f5debf] ${className}`}>
                        <Armchair  color="#A0522D" strokeWidth={2.5} size={36}/>
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Sélectionnez vos dates !</DialogTitle>
                        <DialogDescription>
                            <div className="flex justify-between gap-2 items-center">
                                <div className="flex flex-col gap-3 mt-5">
                                    <p className="dark:text-white">Check In </p>
                                    <DateTimePicker date={checkInDate }  setDate= {setCheckInDate} dateText="Check In date" />
                                </div>
                                <div className="flex flex-col gap-3 mt-5">
                                    <p className="dark:text-white">Check Out </p>
                                    <DateTimePicker date={checkOutDate }  setDate= {setcheckOutDate} dateText="Check Out date" />
                                </div>
                            </div>
                            {/* Champ pour le message */}
                            <div className="flex flex-col gap-3">
                                    <p className="dark:text-white">Message</p>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full p-2 border rounded"
                                        placeholder="Entrez un message..."
                                    />
                            </div>
                        <AlertDialog>
                            <AlertDialogTrigger className="w-full">
                                <button className="w-full mt-5">Réserver maintenant</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Confirmez-vous cette réservation ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Vous êtes sur le point de réserver votre espace. Veuillez confirmer vos dates d'arrivée et de départ <br/>
                                        <div className="mt-5">
                                            <strong>Check In:</strong> {checkInDate?.toLocaleString()} <br />
                                            <strong>Check Out:</strong> {checkOutDate?.toLocaleString()} <br />
                                            <strong>Message:</strong> {message || "Aucun message"} <br />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={booking}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ButtonBooking
