import { Link } from "react-router-dom"

const Services = () => {
    return (
        <>
            <h1 className="text-3xl mt-4  font-[YujiMai] font-extrabold text-center text-[#f5ca8a]">
                Services et expériences uniques au cœur de notre espace </h1>
            <h2 className="text-3xl mt-4  font-[YujiMai] font-extrabold text-center text-[#f1a83a]">Réserver maintenant</h2>
            <p className="text-center mt-8 mx-16">Notre espace de coworking est conçu pour répondre aux besoins des professionnels nomades, 
                freelances, acteurs du digital, et entrepreneurs à la recherche d’un environnement de travail inspirant et accessible. Profitez d’un espace chaleureux et collaboratif pour développer votre activité ou votre startup,
                tout en créant des connexions enrichissantes autour d’un bon café.</p>

            <div className="grid grid-cols-2 gap-16 mt-20 mx-10">
                <div className="flex flex-col items-center text-center">
                    <img src="/bureau.jpg" alt="bureau" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h4 className="text-xl font-semibold mb-2">Location de bureau</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Vous avez besoin d’un bureau pour faire croître votre activité ?
                        Nous offrons des bureaux entièrement équipés,
                        disponibles en location mensuelle flexible.</p>
                    <Link to="/dashboard/office"><button className="text-[#f1a83a] font-extrabold font-[YujiMai]">Réserver maintenant</button></Link>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/coworking.jpg" alt="coworking" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h4 className="text-xl font-semibold mb-2">Espace collectif</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Brisez l'isolement en rejoignant une communauté de professionnels avec lesquels vous pourrez échanger,
                        résoudre vos défis et faire évoluer votre activité.</p>
                    <Link to="/dashboard/coworking"><button className="text-[#f1a83a] font-extrabold font-[YujiMai]">Réserver maintenant</button></Link>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/reunion.jpg" alt="salle de réunion" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h4 className="text-xl font-semibold mb-2">Salle de réunion</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">Vous avez besoin d’un espace pour présenter votre dernière innovation,
                        négocier un contrat clé ou former une équipe ? Nous mettons à votre disposition des salles parfaitement situées,
                        disponibles à la location à l’heure, 24h/24 et 7j/7.</p>
                    <Link to="/dashboard/meeting"><button className="text-[#f1a83a] font-extrabold font-[YujiMai]">Réserver maintenant</button></Link>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/réception.png" alt="salle de réunion" className="w-full h-48 object-cover rounded-lg mb-4"/>
                    <h4 className="text-xl font-semibold mb-2">Réception</h4>
                    <p className="text-gray-600 text-sm flex-grow mb-4">
                    Besoin d’un espace de travail flexible et pratique pour vos rendez-vous ou vos sessions de travail ponctuelles ?
                        Nos tables dans la réception sont idéales pour des rencontres informelles, des discussions de projet ou des moments de concentration
                    </p>
                    <Link to="/dashboard/reception"><button className="text-[#f1a83a] font-extrabold font-[YujiMai]">Réserver maintenant</button></Link>
                </div>
            </div>
        </>
    )
}

export default Services
