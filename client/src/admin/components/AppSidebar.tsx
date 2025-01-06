import { Link, useNavigate } from 'react-router-dom';
import { Users , CalendarCheck, Building, LogOut, LayoutDashboard } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';


// Définition des éléments du menu
const menuItems = [
    { title: 'Tableau de bord', url:'/admin', icon: LayoutDashboard},
    { title: 'Utilisateurs', url:'/admin/users', icon: Users},
    { title: 'Réservations', url:'/admin/booking', icon: CalendarCheck},
    { title: 'Espaces', url:'/admin/space', icon: Building},
];


const AppSidebar = () => {
    const navigate = useNavigate();

      // Fonction pour se déconnecter
    const handleSignOut = () => {
        localStorage.removeItem("authToken"); 
        localStorage.removeItem("user"); 
        navigate("/signin"); 
    };


    return (
    <>
       {/* Sidebar */}
            <Sidebar variant="floating" className="w-80 bg-[#1C2434] h-auto">
                <SidebarContent className='bg-[#1e2431] p-2'>
                    <SidebarGroup>
                        <SidebarGroupLabel className='mb-5 mt-3'> 
                            <img src="/logo.png" alt="rb-coworking-space" width={46}/>
                            <span className='ml-2 text-[#BFA686] font-[YujiMai] text-center text-xl'>RB Coworking space</span>
                        </SidebarGroupLabel>
                        <hr className="border-gray-500 my-2" />
                        <SidebarGroupContent>
                            <SidebarMenu className='mt-2 text-white '>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.title} className='mt-2 py-2'>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
                                                <div className='flex gap-4 ml-2'><item.icon size={24} />
                                                <span className='text-xl'>{item.title}</span></div>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                  {/* Footer de la Sidebar */}
                    <SidebarFooter className="mt-auto p-4  bg-[#1C2434]">
                        <Link to="/signin" className="flex items-center gap-2 text-white ml-2 rounded p-2">
                            <LogOut size={24} />
                                <button className="text-xl" onClick={handleSignOut}>Se déconnecter</button>
                        </Link>
                    </SidebarFooter>
            </Sidebar>
    </>
    )
}

export default AppSidebar
