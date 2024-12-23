import { Link, useNavigate } from "react-router-dom"
import { Bell, CircleUser } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken')
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

         // Fonction pour se déconnecter
  const handleSignOut = () => {
    localStorage.removeItem("authToken"); 
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  return (
    <div className="flex flex-col px-10 py-2  z-20 bg-transparent sticky top-0 shadow-md ">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2">
              <img src="/logo.png" alt="rb-coworking-space" width={60}/> 
              <h3 className="text-gray-200 italic text-sm"> La Foce Collective ... <h1 className="text-2xl  text-gray-200 italic">RB Coworking-space</h1>
              </h3>
          </div>

        </Link>
        <div className="flex justify-center items-center gap-8">
          {token ? (
            // Icône utilisateur si le token existe
            <div className="flex items-center gap-2">
              
              <Link to="/history"><span className=" text-gray-100 mx-10  font-[YujiMai] text-xl" >SERVICES</span></Link>
              <Link to="/history"><span className=" text-gray-100 mx-10  font-[YujiMai] text-xl" >CONTACT</span></Link>
              <Link to="/history"><span className=" text-gray-100 mx-10  font-[YujiMai] text-xl" >HISTORIQUE</span></Link>
              <Bell size={32}  className="cursor-pointer text-gray-100 mr-4"/>
              <DropdownMenu>
                <DropdownMenuTrigger><CircleUser size={32}  className="cursor-pointer text-gray-100" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-[#154849]">{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={()=>{navigate("/")}}>
                      Mon compte
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                      Se déconnecter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            // Bouton "Créer un compte" si le token n'existe pas
            <Link to="/signin">
              <button className="bg-[#ff861a] text-white px-5 py-2 rounded-3xl hover:bg-[#6F4F37]">
                Rejoignez nous
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
