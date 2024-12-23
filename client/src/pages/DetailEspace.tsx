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
                <h2  className="absolute bottom-8 left-[40%] text-4xl font-semibold text-[#7e4717] mb-6 text-start font-[YujiMai]">
                    {room.roomName}
                </h2>
                <p className="text-lg text-gray-600 mb-2 text-center md:text-left flex gap-4 w-[70%] mx-auto mt-16">
                    {room.roomDescription}
                </p>
            </div> 

            <div className="grid grid-cols-2 gap-10  items-center p-8  md:flex-row  md:items-center rounded-lg  mb-6 space-y-4 md:space-y-0">
                {/* Description Section */}
                <div className="  p-8 md:mr-6 ">
                {/* <h2 className="text-4xl font-semibold text-[#7e4717] mb-6 text-start mt-8 font-[YujiMai]" >{room.roomName}</h2> */}
                    {/* <div className="text-lg text-gray-600 mb-2 text-center md:text-left flex gap-4">
                        <div><BookOpenText size={42} strokeWidth={2.5} /></div><div>{room.roomDescription}</div>
                    </div> */}
                </div>
               {/* Details Section */}
                <div className="flex flex-col space-y-3 items-center md:space-y-4 ">
                    <div className="flex items-center gap-2  mx-8 text-gray-600 border-2 rounded-3xl p-8 h-[70%] w-[50%] hover:bg-[#ff861a]">
                        <House size={42} strokeWidth={2.5} />
                        <span className="font-semibold text-gray-800 mr-2 ml-2">Type :</span>
                        <span>{room.roomType}</span>
                    </div>
                    <div className="flex items-center gap-2 mx-8 text-gray-600 border-2 rounded-3xl p-8 h-[70%] w-[50%] hover:bg-[#ff861a]">
                        <Users size={42} strokeWidth={2.5} />
                        <span className="font-semibold text-gray-800 mr-2">Capacité :</span>
                        <span>{room.roomCapacity} personnes</span>
                    </div>
                    <div className="flex items-center gap-2 mx-8 text-gray-600 border-2 rounded-3xl p-8 h-[70%] w-[50%] hover:bg-[#ff861a]">
                        <Coins size={42} strokeWidth={2.5} />
                        <span className="font-semibold text-gray-800 mr-2">Prix :</span>
                        <span>{room.roomPrice} DT / personne</span>
                    </div>
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
