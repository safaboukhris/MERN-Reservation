import { fetchData } from "@/utils/axiosInstance"
import { useEffect, useState } from "react"
import { format } from "date-fns";
import Header from "@/components/Header";
import { Trash2 } from "lucide-react";


const Reservations = () => {
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

    const handleDelete = async (id: string) => {
        try{
            const response = await fetchData( `/api/delete-booking?id=${id}`, 'DELETE', {}, {  Authorization: `Bearer ${token}`})
            if(response.status === 200){
                setHistory(history.filter((item: any) => item._id !== id));
            }
        }catch(error){
            console.error("Erreur lors de la suppression :", error);
        }
    };

    return (
        <>
        <Header/>
        <div className='flex flex-col mt-10 gap-5 px-4 py-2'>
            <h3 className='text-3xl font-semibold border-b leading-10 border-black'> Réservations historique</h3>
            
            <div className="flex flex-col gap-6 items-center mt-10 mx-5">
                {history.length > 0 ? (
                    history.map((item: any) => (
                        <div
                            key={item._id}
                            className="w-full   bg-white  rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-4" >
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {item.bookedRoom ? (
                                    <div className="flex justify-between items-center">
                                        <div >
                                        <p>{item.bookedRoom.roomName}</p> <br />
                                            <p className="text-sm text-gray-600">
                                                Type: {item.bookedRoom.roomType}
                                            </p> 
                                            <p className="text-sm text-gray-600">
                                                Price: {item.bookedRoom.roomPrice} TND
                                            </p> 
                                            <p className="text-sm text-gray-600">
                                                Date d'arrivée:  {format(item.checkInDate, "dd-MM-yy, HH:mm")}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Date de départ: {format(item.checkOutDate, "dd-MM-yy, HH:mm")}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Réservé le: {format(item.bookedDate, "dd-MM-yy, HH:mm")}
                                            </p>
                                        </div>
                                        <div >
                                            <button className="mb-8" onClick={() => handleDelete(item._id)}><Trash2 color="#654b3a" /></button>
                                            <p
                                                className={`font-medium ${
                                                item.status === "Confirmed"
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                            >
                                            {item.status}
                                            </p>
                                        </div>
                                    </div>
                                    ) : (
                                    "No room details available"
                                    )}
                                </h2>
                            </div>
        </div>
        ))
        ) : (
            <p className="text-lg text-gray-500">Aucune réservation historique</p>
        )}
    </div>
    </div>
    </>
    )
}

export default Reservations
