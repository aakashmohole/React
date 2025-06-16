import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext);

    if(!user) return <div>No user logged in</div>;

  return (
    <>
        <h2>Profile</h2>
        {user ? (
            <div>
            <p>Username: {user.userName}</p>
            <p>Password: {user.password}</p>
            </div>
        ) : (
            <p>No user logged in</p>
        )}
    </>
  )
}

export default Profile