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

const ButtonBooking = () => {
    const [checkInDate , setCheckInDate] = useState<Date>();
    const [checkOutDate , setcheckOutDate] = useState<Date>();
    const token = localStorage.getItem("authToken")

     //fetching data from the api 
    const booking = async () =>{
        const res = await fetchData("/api/addbooking", 'POST', { checkInDate, checkOutDate}, { Authorization: `Bearer ${token}`})
        if( res.status === 200){
            alert(res.data.msg)
        }
        // console.log(res.data)
        
    }
    return (
        <>
            <Dialog>
                        <DialogTrigger>
                            <button className=" top absolute hover:bg-[#f5debf] -top-8 left-1/2.5 transform -translate-y-1/2">
                                <Armchair  color="#A0522D" strokeWidth={2.5} size={36}/>
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
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
                                    <AlertDialog>
                                        <AlertDialogTrigger className="w-full">
                                            <button className="w-full mt-5">Réserver maintenant</button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Vous êtes sur le point de réserver votre espace. Veuillez confirmer vos dates d'arrivée et de départ <br/>
                                                    <div className="mt-5">
                                                        <strong>Check In:</strong> {checkInDate?.toLocaleString()} <br />
                                                        <strong>Check Out:</strong> {checkOutDate?.toLocaleString()} <br />
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
