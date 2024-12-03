// import Header from "@/components/Header"
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';


// Définition des éléments du menu
const menuItems = [
    { title: 'Home', url: '#', icon: Home },
    { title: 'Inbox', url: '#', icon: Inbox },
    { title: 'Calendar', url: '#', icon: Calendar },
    { title: 'Search', url: '#', icon: Search },
    { title: 'Settings', url: '#', icon: Settings },
];


const DashboardUser = () => {
    return (
        <>
      
        
        <SidebarProvider>
        <div className="flex h-screen">
          {/* Sidebar */}
            <Sidebar variant="floating">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
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

          {/* Main content */}
            <div className="flex-1 p-4">
                <Header/>
                <SidebarTrigger />
                <h1 className="text-xl font-bold">Bienvenue sur le Dashboard User</h1>
                <p>Votre contenu principal apparaît ici.</p>
                </div>
            </div>
        </SidebarProvider>
        </>
    )
}

export default DashboardUser
