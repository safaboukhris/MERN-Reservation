import { fetchData } from "@/utils/axiosInstance"
import { useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns";


const HistoryComponent = () => {
    const token = localStorage.getItem("authToken")
    const [history, setHistory] = useState<any>([])

    useEffect(()=>{
        const fetchHistory = async () =>{
            try{
                const response = await fetchData('/api/getbookings', 'GET', {}, {  Authorization: `Bearer ${token}`})
                if(response.status === 200){
                    setHistory(response.data.history)
                    console.log("my history is",response.data.history)
                }
            }catch(error){
                console.error(error)
            }
        }
        fetchHistory()
    },[token])


    return (
        <div className='flex flex-col mt-10 gap-5 px-4 py-2'>
            <h3 className='text-2xl font-semibold border-b leading-10 border-black'> Réservations historique</h3>
            <div className='flex flex-col gap-5 items-center'>
                {history.length > 0 ? ( history.map((item: any, index: number) => (
                    <Card key={item._id} className="w-full">
                        <CardHeader>
                            <CardTitle>
                            {item.bookedRoom ? (
                                        <>
                                            <span>{item.bookedRoom.roomName}</span> -{" "}
                                            <span>{item.bookedRoom.roomType}</span> ({item.bookedRoom.roomDescription})
                                        </>
                                    ) : (
                                        "No room details available"
                                    )}
                            </CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between">
                                <div className="flex flex-col items-start">
                                    <p>Date d'arrivée : {format(item.checkInDate , "dd-MM-yy, HH:mm")}</p>
                                    <p>Date de départ : {format(item.checkOutDate, "dd-MM-yy, HH:mm")}</p>
                                    <p> Réservé le : {format(item.bookedDate, "dd-MM-yy, HH:mm")}</p>
                                </div>
                                <div>
                                    <p>status: {item.status}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )) 
                ) : (
                    <p className='text-lg text-gray-500'>Aucune réservation historique</p>
                )}
            </div>
        </div>
    )
}

export default HistoryComponent
