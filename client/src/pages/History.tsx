import {
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import Header from '@/components/Header';
import AppSidebar from '@/components/AppSidebar';
import HistoryComponent from '@/components/HistoryComponent';

const History = () => {
    return (
        <SidebarProvider>
        <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex-1 p-4">
                <Header />
                   {/* main */}
                    <div className="p-4">
                        <SidebarTrigger />
                        <HistoryComponent/>
                    </div>
            </div>
        </div>
    </SidebarProvider>
    )
}

export default History
