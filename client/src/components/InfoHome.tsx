import { MapPinHouse, SmilePlus, UsersRound, Wifi } from "lucide-react"

const InfoHome = () => {
    return (
    <>
      <div className="relative h-[700px] bg-gray-100" >
       <div className="absolute inset-0 flex justify-center items-center p-10">
         <div className="bg-white w-[90%] h-[90%] p-8 rounded-3xl shadow-lg flex justify-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 p-10  ">
                <div className="border-2 border-gray-200 rounded-3xl p-8 h-[70%] w-[80%] hover:bg-[#ff861a]">
                    <MapPinHouse size={40} color="#303030" strokeWidth={2.5}/>
                    <h1 className="font-[YujiMai] text-xl mt-4"> 1 Espace coworking</h1>
                </div>
                <div className="border-2 border-gray-200 rounded-3xl p-8 h-[70%] w-[80%] hover:bg-[#ff861a]">
                <Wifi size={40} color="#303030" strokeWidth={2.5} />
                <h1 className="font-[YujiMai] text-xl mt-4"> Wifi</h1>
                </div>
                <div className="border-2 border-gray-200 rounded-3xl p-8 h-[70%] w-[80%] hover:bg-[#ff861a]">
                <UsersRound size={40} color="#303030" strokeWidth={2.5} />
                <h1 className="font-[YujiMai] text-xl mt-4"> Communauté active</h1>
                </div>
                <div className="border-2 border-gray-200 rounded-3xl p-8 h-[70%] w-[80%] hover:bg-[#ff861a]">
                <SmilePlus size={40} color="#303030" strokeWidth={2.5} />
                <h1 className="font-[YujiMai] text-xl mt-4">Zone de relaxation </h1>
                </div>
            </div>
            <div>
                <h4 className=" font-[YujiMai] font-extrabold text-2xl mt-10 text-gray-900">Pour quoi choisissez</h4>
                <h2 className="font-[YujiMai] text-4xl text-[#ff861a] mt-5">RB Coworking Space</h2>
                <p className="text-gray-600 mt-8 font-[YujiMai] text-xl">RB Coworking Space est un espace de travail moderne situé à Teboulba, Monastir, conçu pour répondre aux besoins des professionnels, entrepreneurs, et travailleurs indépendants. </p>
                <p className="text-gray-600 mt-5 font-[YujiMai] text-xl">Offrant une variété d'espaces, tels que des bureaux individuels, des salles de réunion et des chaises individuelles, RB Coworking Space propose un environnement collaboratif, équipé d'infrastructures modernes, idéal pour stimuler la productivité et favoriser les échanges. </p>
                <p className="text-gray-600 mt-5 font-[YujiMai] text-xl">Avec une vision axée sur l'innovation et la flexibilité, RB Coworking Space vise à devenir un lieu incontournable pour le travail et la créativité dans la région.</p>

            </div>
            </div>
         </div>
       </div>
      </div>
    </>
  )
}

export default InfoHome
