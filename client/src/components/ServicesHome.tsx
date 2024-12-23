import { fetchData } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const imageData = [
    "public/coworking1.jpg",
    "public/coworking2.jpg",
    "public/coworking3.jpg",
    "public/coworking4.jpg",
];

// Composant TableCard pour afficher les informations dynamiques des salles
const TableCard = ({ room, image }: { room: any; image: string }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center max-w-md mx-auto my-4">
            <div
                style={{
                    backgroundImage: `url('${image}')`,
                }}
                className="bg-gray-300 h-[600px] w-full rounded-xl shadow-md bg-cover bg-center"
            ></div>
            <div className="w-64 md:w-72 bg-white -mt-12 shadow-lg rounded-lg overflow-hidden">
                <div className="py-3 text-center font-bold uppercase tracking-wide text-[#154849]">
                    {room.roomName || "Salle"}
                </div>
                <div className="flex flex-col items-center justify-between py-2 px-3 bg-[#154849]">
                    <button
                        className=" text-md text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 mt-2"
                        onClick={() => {
                            navigate(`/detail?id=${room._id}`);
                        }}
                    >
                        Réserver
                    </button>
                </div>
            </div>
        </div>
    );
};


const ServicesHome = () => {
    const token = localStorage.getItem("authToken");
    const [rooms, setRooms] = useState<any[]>([]);

    // Récupération des salles via l'API
    useEffect(() => {
        const getRooms = async () => {
            const res = await fetchData(
                "/api/admin/getrooms",
                "GET",
                {},
                { Authorization: `Bearer ${token}` }
            );
            if (res.status === 200) {
                setRooms(res.data.rooms);
            } else {
                console.error("Failed to fetch rooms:", res);
            }
        };
        getRooms();
    }, []);

    return (
        <div className="mb-[8%]">
            <h3 className="text-[#154849] font-extrabold text-6xl text-center mt-[20%] w-[60%] mx-auto">
                Trouvez l'environnement de travail qui vous motive
            </h3>
            <div className="mt-20 mx-auto p-4 w-[85%]">
                {rooms.length > 0 ? (
                    <Carousel className="gap-1">
                        <CarouselContent>
                            {rooms.map((room, index) => (
                                <CarouselItem
                                    key={room._id}
                                    className="md:basis-1/2 lg:basis-1/3 px-1"
                                >
                                    <TableCard room={room} image={imageData[index % imageData.length]} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                ) : (
                    <p className="text-center text-gray-600 text-lg">loading...</p>
                )}
            </div>
        </div>
    );
};

export default ServicesHome;
