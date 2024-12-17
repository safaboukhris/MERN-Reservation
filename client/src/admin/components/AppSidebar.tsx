import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
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
    { title: 'Gestion des reservations', url:'/admin/booking', icon: Users},
    { title: 'Gestion des espaces', url:'/admin/space', icon: Users},
];


const AppSidebar = () => {
    return (
    <>
       {/* Sidebar */}
            <Sidebar variant="floating" className="w-64">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel >RB Coworking space</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className='mt-2'>
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
