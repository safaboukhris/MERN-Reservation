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



const ButtonBookingRight = ({ className }: { className?: string }) => {
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
                    <button className={`${className} group`}>
                        <img
                            src="chaiseRight.png"
                            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                            alt="Chaise"
                        />
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-[#154849] text-2xl">Sélectionnez vos dates !</DialogTitle>
                        <DialogDescription>
                            <div className="flex justify-between gap-2 items-center">
                                <div className="flex flex-col gap-3 mt-5">
                                    <p className="text-gray-800 font-bold">Check In </p>
                                    <DateTimePicker date={checkInDate }  setDate= {setCheckInDate} dateText="Check In date" />
                                </div>
                                <div className="flex flex-col gap-3 mt-5">
                                    <p className="text-gray-800 font-bold">Check Out </p>
                                    <DateTimePicker date={checkOutDate }  setDate= {setcheckOutDate} dateText="Check Out date" />
                                </div>
                            </div>
                            {/* Champ pour le message */}
                            <div className="flex flex-col gap-3">
                                    <p className="text-gray-800 font-bold mt-4">Message</p>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full p-2 border rounded"
                                        placeholder="Entrez un message..."
                                    />
                            </div>
                        <AlertDialog>
                            <AlertDialogTrigger className="w-full">
                                <button className="w-full mt-5 border font-bold border-[#154849] text-[#154849] p-3 rounded-md">Réserver maintenant</button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-[#154849] text-2xl mb-3">Confirmez-vous cette réservation ?</AlertDialogTitle>
                                    <AlertDialogDescription className="text-gray-700 text-lg">
                                        Vous êtes sur le point de réserver votre espace. Veuillez confirmer vos dates d'arrivée et de départ <br/>
                                        <div className="mt-5">
                                            <strong className="mr-5">Check In :</strong> {checkInDate?.toLocaleString()} <br />
                                            <strong className="mr-5">Check Out :</strong> {checkOutDate?.toLocaleString()} <br />
                                            <strong className="mr-5">Message :</strong> {message || "Aucun message"} <br />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="text-[#154849] border border-[#154849]">Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={booking} className="bg-[#154849]">Continue</AlertDialogAction>
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

export default ButtonBookingRight
