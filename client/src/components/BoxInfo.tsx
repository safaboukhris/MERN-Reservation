import { BadgeCheck, HandHelping, UsersRound } from "lucide-react"


const BoxInfo = () => {
    return (
        <div className="mb-80 flex justify-between gap-10 bg-white rounded-3xl shadow-md w-[85%] p-10 absolute -mt-14 right-[8%] sm-md:hidden ">
            <div className="flex  flex-col gap-2 justify-center items-center hover:bg-[#9fbabb] rounded-3xl transition">
                <div><BadgeCheck color="#303030" size={42} /></div>
                <div>
                    <h3 className="text-gray-800 font-bold lg:text-2xl mb-2 text-center sm:text-md">Qualité</h3>
                    <p className="text-gray-500  lg:text-md text-center sm:text-xs">Chez nous, la qualité n’est pas une simple option, mais une véritable exigence. Nous nous engageons à répondre pleinement aux attentes 
                        de nos clients en leur offrant des prestations qui reflètent leurs désirs et leurs besoins.</p>
                </div>
            </div>

            <div className="flex  flex-col gap-2 justify-center items-center hover:bg-[#9fbabb] rounded-3xl transition">
                <div><HandHelping color="#303030" size={42} /></div>
                <div>
                    <h3 className="text-gray-800 font-bold lg:text-2xl mb-2 text-center sm:text-md"> Flexibilité</h3>
                    <p className="text-gray-500  lg:text-md text-center sm:text-xs">La flexibilité est au cœur de notre approche. Nous nous adaptons à votre mode de travail, qu’il s’agisse d’espaces partagés ou 
                        de bureaux privatifs. Nos solutions sont conçues pour répondre à toutes vos exigences.</p>
                </div>
            </div>

            <div className="flex  flex-col gap-2 justify-center items-center hover:bg-[#9fbabb] rounded-3xl transition">
                <div><UsersRound color="#303030" size={42} /></div>
                <div>
                    <h3 className="text-gray-800 font-bold lg:text-2xl mb-2 text-center sm:text-md">Communauté</h3>
                    <p className="text-gray-500  lg:text-md text-center sm:text-xs">Travailler chez RB coworking space, c’est bien plus qu’un simple lieu de travail ! Nous favorisons le partage, stimulons la collaboration,
                        et faisons de la connectivité la pierre angulaire de notre communauté dynamique.</p>
                </div>
            </div>
        </div>
    )
}

export default BoxInfo
