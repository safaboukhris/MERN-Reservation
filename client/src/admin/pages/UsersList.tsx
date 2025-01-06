import { useEffect, useState } from 'react'
import { DataTable } from '../components/DataTable'
import { columns } from './Columns'
import { fetchData } from '@/utils/axiosInstance'
import { UsersRound } from 'lucide-react'
import { FadeLoader } from 'react-spinners';


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
                setLoading(false); 
            }
        };
        fetchUsers();
    }, []);
    

    if (loading) return <div className='flex justify-center items-center min-h-screen'>
                            <FadeLoader color='#154849' loading={true} height={25} width={25} />
                        </div>
    if (error) return <p>{error}</p>

    return (
        <section className="py-8">
            <div className="w-full">
                <div className='flex gap-4'>
                    <UsersRound size={32}  color="#1C2434"/>
                    <h1 className="mb-14 text-3xl font-extrabold text-[#1C2434]" >Annuaire des Utilisateurs</h1>
                </div>
                {data && <DataTable columns={columns} data={data} />}
            </div>
        </section>
    )
}

export default UsersList
