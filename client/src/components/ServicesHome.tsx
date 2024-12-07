import { fetchData } from "@/utils/axiosInstance"
import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"

const ServicesHome = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("authToken")
    const [rooms, setRooms]= useState<any>([])
    
    //get all rooms
    useEffect(() =>{
        const getrooms = async () => {
            const res = await fetchData("/api/admin/getrooms" , "GET" ,{} , { Authorization: `Bearer ${token}`} )
            if (res.status === 200){
                setRooms(res.data.rooms)
            } else {
                console.error("Failed to fetch rooms:", res);
            }
        }
        getrooms()
    },[])

    return (
        <div className="mb-[8%]">
            <h3 className="text-[#FF861A] font-[YujiMai] font-extrabold text-4xl text-center"> Trouvez l'environnement de travail qui vous motive</h3>
            <div className="grid grid-cols-5 gap-8 mt-20 mx-10 p-4 ">
                {rooms.length > 0 ? (
                    rooms.map((room: any) => (
                        <div
                            key={room._id}
                            className=" p-6 hover:shadow-xl transition-shadow duration-300  hover:shadow-[#ff861a] flex flex-col items-center rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-5 text-center text-gray-600"> {room.roomName}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Type : </strong> {room.roomType}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Capacity : </strong> {room.roomCapacity}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Price : </strong> {room.roomPrice} TND
                            </p>
                    <button
                        className=" py-2 px-4 text-white bg-[#ff861a] rounded-xl font-medium text-lg hover:bg-[#d98a25] transition-colors duration-300 mt-5"
                        onClick={() => {
                            navigate(`/detail?id=${room._id}`);
                        }}
                    >
                        Je réserve
                    </button>
                </div>
                ))
            ) : (
                <p className="col-span-3 text-center text-gray-600 text-lg">
                    loading
                </p>
            )}
        </div>
    </div>
    )
}

export default ServicesHome
