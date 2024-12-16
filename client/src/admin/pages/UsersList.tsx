import { useEffect, useState } from 'react'
import { DataTable } from '../components/DataTable'
import { User, columns } from './Columns'

async function getUsers(): Promise<User[]> {
    const res = await fetch(
        'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    )
    return res.json()
}

const UsersList = () => {
    const [data, setData] = useState<User[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getUsers()
                setData(users)
            } catch (err) {
                setError('Failed to fetch users')
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

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
