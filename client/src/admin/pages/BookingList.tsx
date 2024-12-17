import { useEffect, useState } from 'react'
import { fetchData } from '@/utils/axiosInstance'
import { columns } from './ColumnsHistory'
import { DataTable } from '../components/DataTable'

const BookingList = () => {

    const token = localStorage.getItem("authToken")
    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchReservation = async () => {
            try {
                const res = await fetchData('/api/get-all-history', 'GET', {}, { Authorization: `Bearer ${token}` });
                console.log(res.data.history)
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
    

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <section className="py-24">
            <div className="w-full">
                <h1 className="mb-6 text-3xl font-bold">all reservations</h1>
                    {data && <DataTable columns={columns} data={data} />}
                </div>
        </section>
    )
}

export default BookingList
