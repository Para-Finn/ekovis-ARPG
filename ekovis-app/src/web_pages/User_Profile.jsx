import { useEffect, useState } from 'react'
import UserDetails from '@/componets/User_Details'

const UserProfile = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('http://localhost:5000/api/users/6a5fa5c0b321613e316c4340/')
            const json = await response.json()

            if (response.ok) {
                setUser(json)
            }
        }

        fetchUser()
    })

    return (
            <div>
                {user && <UserDetails key={user._id} user={user}/> }
            </div>
        )
}

export default UserProfile