import { useEffect, useState } from 'react'
import { fetchData } from '@/utils/axiosInstance'
import { columns } from './ColumnsHistory'
import { DataTable } from '../components/DataTable'
import { CalendarCheck } from 'lucide-react'
import { FadeLoader } from 'react-spinners';
const BookingList = () => {

    const token = localStorage.getItem("authToken")
    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const res = await fetchData('/api/get-all-history', 'GET', {}, { Authorization: `Bearer ${token}` });
                // console.log(res.data.history)
                if (res.status === 200) {
                    setData(res.data.history);
                } else {
                    setError("Failed to fetch users");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false); // Assurez-vous que l'état loading est mis à jour
            }
        };
        fetchReservation();
    }, []);
    

    if (loading) return <div className='flex justify-center items-center min-h-screen'>
                            <FadeLoader color='#154849' loading={true} size={80} />
                        </div>
    if (error) return <p>{error}</p>

    return (
        <section className="py-8">
            <div className="w-full">
                <div className='flex gap-4'>
                    <CalendarCheck size={32} color="#1C2434" />
                    <h1 className="mb-14 text-3xl font-extrabold text-[#1C2434] ">Historique des Réservations</h1>
                </div>
                    {data && <DataTable columns={columns} data={data} />}
                </div>
        </section>
    )
}

export default BookingList
