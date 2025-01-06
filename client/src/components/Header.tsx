import { Link, useNavigate } from "react-router-dom";
import { Bell, CircleUser, Menu, X } from 'lucide-react';
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem('authToken');
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

  // Fonction pour se déconnecter
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex flex-col px-10 py-2 z-20 sticky top-0 bg-black/15 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex justify-center items-center gap-2">
            <img src="/logo.png" alt="rb-coworking-space" width={60} className="lg:w-16 sm:w-10" />
            <h1 className="text-gray-200 italic text-sm lg:block md:hidden">
              La Foce Collective ... 
              <p className="text-xl text-gray-200 italic lg:text-2xl sm:text-xs">RB Coworking-space</p>
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          {/* Menu pour les écrans lg */}
          <div className="hidden md:flex items-center gap-4 font-bold">
            {token ? (
              <>
                <a href="#qui-somme-nous" className="text-gray-100 md:text-sm">QUI SOMME NOUS</a>
                <a href="#services" className="text-gray-100 md:text-sm">SERVICES</a>
                <Link to="/history" className="text-gray-100 md:text-sm">HISTORIQUE</Link>
                <Bell size={32} className="cursor-pointer text-gray-100" />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <CircleUser size={32} className="cursor-pointer text-gray-100" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel className="text-[#154849]">{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={() => { navigate("/"); }}>
                      Mon compte
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                      Se déconnecter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link to="/signin">
                <button className="bg-[#ff861a] text-white px-5 py-2 rounded-3xl hover:bg-[#6F4F37]">
                  Rejoignez nous
                </button>
              </Link>
            )}
          </div>

          {/* Menu burger pour les petits écrans */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} className="text-gray-100" /> : <Menu size={32} className="text-gray-100" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu déroulant du burger */}
      {isMenuOpen && (
        <div className="flex flex-col bg-black/70 text-white py-4 px-6 space-y-4 md:hidden">
          <a href="#qui-somme-nous" className="text-gray-100 " onClick={() => setIsMenuOpen(false)}>QUI SOMME NOUS</a>
          <a href="#services" className="text-gray-100" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
          <Link to="/contact" className="text-gray-100" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          <Link to="/history" className="text-gray-100" onClick={() => setIsMenuOpen(false)}>HISTORIQUE</Link>
          {token ? (
            <>
              <button onClick={handleSignOut} className="text-gray-100 text-left">Se déconnecter</button>
            </>
          ) : (
            <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-[#ff861a] text-white px-5 py-2 rounded-3xl hover:bg-[#6F4F37] w-full">
                Rejoignez nous
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
