import ButtonBooking from "@/components/ButtonBooking";
import TableConception from "@/components/TableConception";
import { fetchData } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


const Room = () => {
    const location = useLocation()
    const [ singleRoom, setSingleRoom] = useState<any>({})
    const token = localStorage.getItem("authToken")
    const search = new URLSearchParams(location.search)
    const roomId = search.get("id");

      //get single room
    useEffect(()=>{
        const getSingleRoom = async () => {
            const res = await fetchData(`/api/admin/getroom?id=${roomId}` , "GET" ,{} , { Authorization:`Bearer ${token}`})
            if(res.status === 200){
                setSingleRoom(res.data)
                console.log( "my single room data issss",singleRoom)
            }else {
                console.error("Failed to fetch single room:", res);
            }
        }
        getSingleRoom()
    },[roomId])

     // Ensure that the room object exists before accessing its properties
    const room = singleRoom.room || {};

    return (
        <div className="flex flex-col px-4 py-2">
            <h2>Espace détail</h2>
            <div className="flex flex-col mt-10">
                <h2> Espace :{room.roomName} </h2>
                <p> Description : {room.roomDescription}</p>
                <p> Type d'espace : {room.roomType}</p>
                <p> Capacité : {room.roomCapacity}</p>
                <p> Prix : {room.roomPrice} DT</p>





                <TableConception/>
            </div>
        </div>
    )
}

export default Room
