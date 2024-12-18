import { Link } from 'react-router-dom';
import { Users , CalendarCheck, Building} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';


// Définition des éléments du menu
const menuItems = [
    { title: 'Gestion des utilisateurs', url:'/admin/users', icon: Users},
    { title: 'Gestion des reservations', url:'/admin/booking', icon: CalendarCheck},
    { title: 'Gestion des espaces', url:'/admin/space', icon: Building},
];


const AppSidebar = () => {
    return (
    <>
       {/* Sidebar */}
            <Sidebar variant="floating" className="w-64 bg-slate-200">
                <SidebarContent className='bg-[#1e2431] p-2'>
                    <SidebarGroup>
                        <SidebarGroupLabel className='mb-5 mt-3'> 
                            <img src="/logo.png" alt="rb-coworking-space" width={42}/>
                            <span className='ml-2 text-[#BFA686] text-base font-[YujiMai] text-center'>RB Coworking space</span>
                        </SidebarGroupLabel>
                        <hr className="border-gray-500 my-2" />
                        <SidebarGroupContent>
                            <SidebarMenu className='mt-2 text-white'>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.title} className='mt-2'>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
    </>
    )
}

export default AppSidebar
