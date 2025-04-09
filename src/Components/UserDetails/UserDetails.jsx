import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const UserDetails = () => {
    const {logout} = useAuth0()
  return (
    <section>
        <div className="p-5">
            <button onClick={()=>logout({logoutParams : {returnTo : window.location.origin}})}>Logout</button>
        </div>
    </section>
  )
}

export default UserDetails