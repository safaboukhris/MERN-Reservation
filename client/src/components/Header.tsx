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
        // console.log(token)
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
        // console.log(user)

         // Fonction pour se déconnecter
  const handleSignOut = () => {
    localStorage.removeItem("authToken"); 
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  return (
    <div className="flex flex-col px-10 py-2 ">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
            <img src="/logo.jpg" alt="rb-coworking-space" width={50}/>
            <h1 className="text-xl font-[kablammo] text-[#C7AD86]">RB-Coworking-space</h1>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link to="/about">
            <h3 className="font-[YujiMai] text-[#C7AD86]">QUI SOMMES NOUS</h3>
          </Link>
          {token ? (
            // Icône utilisateur si le token existe
            <div className="flex items-center gap-2">
              <Bell size={24}  className="cursor-pointer text-[#C7AD86] mr-4"/>
              <DropdownMenu>
                <DropdownMenuTrigger><CircleUser size={24}  className="cursor-pointer text-[#C7AD86]" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-[#f1a83a]">{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={()=>{navigate("/dashboard")}}>
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
              <button className="bg-[#C7AD86] text-white px-4 py-1 rounded-2xl hover:bg-[#6F4F37]">
                Créer un compte
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
