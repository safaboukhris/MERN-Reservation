import { useEffect, useState } from 'react'
import { DataTable } from '../components/DataTable'
import { columns } from './Columns'
import { fetchData } from '@/utils/axiosInstance'


const UsersList = () => {

    const token = localStorage.getItem("authToken") 
    const [data, setData] = useState<any[] | null>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetchData('/api/get-users', 'GET', {}, { Authorization: `Bearer ${token}` });
                if (res.status === 200) {
                    setData(res.data);
                } else {
                    setError("Failed to fetch users");
                }
            } catch (err) {
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false); // Assurez-vous que l'état loading est mis à jour
            }
        };
        fetchUsers();
    }, []);
    

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <section className="py-24">
            <div className="w-full">
                <h1 className="mb-6 text-3xl font-bold">All Users</h1>
                {data && <DataTable columns={columns} data={data} />}
            </div>
        </section>
    )
}

export default UsersList
