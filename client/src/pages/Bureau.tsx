import {
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import Header from '@/components/Header';
import AppSidebar from '@/components/AppSidebar';
import TableConception from '@/components/TableConception';

const Bureau = () => {
    return (
        <>
            <SidebarProvider>
                <div className="flex h-screen w-full">
                    <AppSidebar />
                    <div className="flex-1 p-4">
                        <Header />
                           {/* main */}
                            <div className="p-4">
                                <SidebarTrigger />
                                <h1>bureau</h1>
                                <TableConception/>
                            </div>
                    </div>
                </div>
            </SidebarProvider>
        </>
    )
}

export default Bureau
