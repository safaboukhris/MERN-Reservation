import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import ServicesHome from "@/components/ServicesHome";
import TableBureau from "@/components/TableBureau";
import TableConception from "@/components/TableConception";
import TableEspaceCalme from "@/components/TableEspaceCalme";
import TableReception from "@/components/TableReception";
import TableSalleFormation from "@/components/TableSalleFormation";
import { fetchData } from "@/utils/axiosInstance";
import { Coins, House, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Amenities from "@/components/Amenities";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const DetailEspace = () => {
    const location = useLocation();
    const [singleRoom, setSingleRoom] = useState<any>({});
    const token = localStorage.getItem("authToken");
    const search = new URLSearchParams(location.search);
    const roomId = search.get("id");

    useEffect(() => {
        if (!token) {
            console.error("Token is missing. Please log in again.");
            return;
        }

        const getSingleRoom = async () => {
            const res = await fetchData(`/api/admin/getroom?id=${roomId}`, "GET", {}, { Authorization: `Bearer ${token}` });
            if (res.status === 200) {
                setSingleRoom(res.data);
            } else {
                console.error("Failed to fetch single room:", res);
            }
        };
        getSingleRoom();
    }, [roomId, token]);

    const { room = {} } = singleRoom;

    const renderRoomSpecificComponent = () => {
        switch (room.roomName?.trim()) {
            case "Salle de réunion":
                return <TableConception />;
            case "Bureau":
                return <TableBureau />;
            case "Espace de réception":
                return <TableReception />;
            case "Salle de formation":
                return <TableSalleFormation />;
            case "Espace calme":
                return <TableEspaceCalme />;
            default:
                return null;
        }
    };
    

    return (
        <>  
            <ScrollToTopButton/>
            <ScrollToTop/>
            
            <div
                className="relative h-[80vh] bg-cover bg-fixed"
                style={{ backgroundImage: "url('/travail.jpg')", backgroundRepeat: "no-repeat" }}
            ><Header /></div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-6xl font-semibold text-[#154849] text-center mt-[12vh]">
                    {room.roomName || "Nom non spécifié"}
                </h2>
                <p className="text-xl text-gray-600 mb-2 text-center w-[60%] mx-auto mt-16 leading-relaxed">
                    {room.roomDescription || "Description non disponible"}
                </p>
            </div>
            <div className="grid grid-cols-3 space-y-3 w-[80%] mx-auto items-center md:space-y-4 mt-16 mb-28 h-[40%]">
                <div className="flex items-center gap-2 mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[70%] hover:bg-[#98babb]">
                    <House size={42} strokeWidth={2.5} />
                    <span className="font-semibold text-gray-800">Type :</span>
                    <span>{room.roomType || "Type non spécifié"}</span>
                </div>
                <div className="flex items-center gap-2 mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[80%] hover:bg-[#98babb]">
                    <Users size={42} strokeWidth={2.5} />
                    <span className="font-semibold text-gray-800">Capacité :</span>
                    <span>{room.roomCapacity || "Capacité non spécifiée"} personnes</span>
                </div>
                <div className="flex items-center gap-2 mx-8 text-gray-600 border-2 rounded-3xl p-8 h-full w-[70%] hover:bg-[#98babb]">
                    <Coins size={42} strokeWidth={2.5} />
                    <span className="font-semibold text-gray-800">Prix :</span>
                    <span>{room.roomPrice || "Prix non spécifié"} / personne</span>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl text-[#154849] w-[80%] mx-auto font-semibold">
                Cliquez sur la chaise souhaitée pour effectuer votre réservation
                </h1>
                <div className="mb-[20vh]">{renderRoomSpecificComponent()}</div>
                
            </div>
            <Amenities/>
            <Footer/>
        </>
    );
};

export default DetailEspace;
