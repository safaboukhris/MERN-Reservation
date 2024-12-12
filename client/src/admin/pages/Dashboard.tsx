import { Outlet } from 'react-router-dom';
import AppSidebar from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {/* Render the child routes */}
                <Outlet />
            </main>
        </SidebarProvider>
    );
};

export default DashboardLayout;
