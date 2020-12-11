import {useSession} from '../firebase/UserProvider'
import React from 'react'

const Profile = () => {

        const {user} = useSession()

        if(!user){
            return null
        }
        return(
            <div>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <p>ID: {user.uid}</p>
            </div>
    
        )
    
    }

export default Profile