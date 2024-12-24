import { MapPin, Phone, Mail} from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div
            className="relative h-[500px] bg-cover bg-fixed "
            style={{
              backgroundImage: "url('/footerr.png')",
              backgroundRepeat: "no-repeat",
            }}
        >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Footer Content */}
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 text-white mt-20 ml-16">

          {/* Left Column (Logo and Description) */}
    <div className="flex flex-col items-center md:items-start mt-20">
      <div className="flex gap-2  items-center md:items-start"><img src="/logo.png" alt="RB-Coworking-Space" className="w-16 mb-4" /> <h2 className="mt-6 italic text-gray-50">la Force Collective... </h2></div>
      <h1 className="text-4xl font-bold italic">RB Coworking-Space</h1>
      <p className="text-xl mt-2 text-gray-300 italic text-center md:text-left">
        Un espace de coworking à Téboulba, Monastir, <br/>offrant un environnement collaboratif idéal<br/> pour travailler.
      </p>
    </div>

    {/* Middle Column (Menu) */}
    <div className="grid grid-cols-2">
    <div className="flex flex-col items-center md:items-start mt-20">
      <h2 className="text-4xl font-semibold mb-4 italic">Menu</h2>
      <ul className="space-y-2 mt-4">
        <li><Link to={"/"} className="hover:underline text-2xl italic text-gray-300 ">Home</Link></li>
        <li><Link to={"/"} className="hover:underline text-2xl italic text-gray-300">Historique</Link></li>
        <li><Link to={"/"} className="hover:underline text-2xl italic text-gray-300">Reservations</Link></li>
        <li><Link to={"/"} className="hover:underline text-2xl italic text-gray-300">Contact</Link></li>
      </ul>
    </div>

    {/* Right Column (Contact Information) */}
    <div className="flex flex-col items-center md:items-start mt-20">
      <h2 className="text-4xl font-semibold mb-4 italic">Contact</h2>
      <div className="flex items-center space-x-2 gap-4 mt-4">
        <MapPin size={32} />
        <p className="text-xl italic text-gray-300">Adresse: Rue Ennasr, Teboulba, Monastir</p>
      </div>
      <div className="flex items-center space-x-2 mt-6 gap-4">
        <Phone size={32} />
        <p className="text-xl italic text-gray-300">Téléphone: +216 51 660 551</p>
      </div>
      <div className="flex items-center space-x-2 mt-6 gap-4">
        <Mail size={32} />
        <p className="text-xl italic text-gray-300">Email: rbitsolutions55@gmail.com</p>
      </div>
    </div>
    </div>
    <div >
        <h4 >Copyright &copy; 2024</h4>
      </div>
  </div>
</div>
    )
}

export default Footer
