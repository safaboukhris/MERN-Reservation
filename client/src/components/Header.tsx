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
        console.log("my user is:::",user)
        // console.log("my role ::", user.role)

         // Fonction pour se déconnecter
  const handleSignOut = () => {
    localStorage.removeItem("authToken"); 
    localStorage.removeItem("user"); 
    navigate("/"); 
  };

  return (
    <div className="flex flex-col px-10 py-2 relative z-20 ">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-5">
            <img src="/logo.png" alt="rb-coworking-space" width={60}/>
            <h1 className="text-2xl font-[kablammo] text-[#ff861a]">RB-Coworking-space</h1>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-8">
          {token ? (
            // Icône utilisateur si le token existe
            <div className="flex items-center gap-2">
              <Link to="/history"><span className=" text-[#ff861a] mx-10  font-[YujiMai] text-xl" >HISTORIQUE</span></Link>
              <Bell size={32}  className="cursor-pointer text-[#ff861a] mr-4"/>
              <DropdownMenu>
                <DropdownMenuTrigger><CircleUser size={32}  className="cursor-pointer text-[#ff861a]" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-[#f1a83a]">{user?.name}</DropdownMenuLabel>
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
