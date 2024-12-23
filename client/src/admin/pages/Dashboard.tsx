import { Outlet } from 'react-router-dom';
import AppSidebar from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


const DashboardLayout = () => {
    return (
        <SidebarProvider >
            <div className="flex h-screen w-full">
                <AppSidebar />
                    <main className="flex-1 p-4 ml-16">
                        <SidebarTrigger />
                            {/* Render the child routes */}
                        <Outlet />
                    </main>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
