import Header from "@/components/Header";
import ServicesHome from "@/components/ServicesHome";
import TableConception from "@/components/TableConception";
import { fetchData } from "@/utils/axiosInstance";
import { BookOpenText, Coins, House, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"


const DetailEspace = () => {
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
        <>
        <Header/>   
            <div  className="relative h-[600px] bg-cover bg-fixed"
                style={{ backgroundImage: "url('/travail.jpg')", backgroundRepeat: 'no-repeat' }}
            >
            </div> 
            <div className="flex flex-col items-center justify-center ">  
                <h2  className=" text-6xl font-semibold text-[#154849] text-start font-[YujiMai] mt-[12vh]">
                    {room.roomName}
                </h2>
                <p className="text-lg text-gray-600 mb-2 text-center md:text-left flex gap-4 w-[50%] mx-auto mt-16">
                    {room.roomDescription}
                </p>
            </div> 
               {/* Details Section */}
                <div className="grid grid-cols-3 space-y-3 w-[80%] mx-auto items-center md:space-y-4 mt-16 mb-56 border h-[40%]">
                    <div className="flex items-center gap-2  mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[70%] hover:bg-[#ff861a]">
                        <div className="flex items-center gap-2">
                            <House size={42} strokeWidth={2.5} />
                            <span className="font-semibold text-gray-800 ">Type :</span>
                        </div>
                            <span>{room.roomType}</span>
                    </div>
                    <div className="flex items-center gap-2  mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[70%] hover:bg-[#ff861a]">
                        <div className="flex items-center gap-2">
                            <Users size={42} strokeWidth={2.5} />
                            <span className="font-semibold text-gray-800 ">Capacité :</span>
                        </div>
                            <span>{room.roomCapacity} personnes</span>
                    </div>
                    <div className="flex items-center gap-2  mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[70%] hover:bg-[#ff861a]">
                        <div className="flex items-center gap-2">
                            <Coins size={42} strokeWidth={2.5} />
                            <span className="font-semibold text-gray-800 ">Prix :</span>
                        </div>
                        <span>{room.roomPrice} personne</span>
                    </div>
                </div>
            <TableConception />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ServicesHome/>
        </>
    )
}

export default DetailEspace
