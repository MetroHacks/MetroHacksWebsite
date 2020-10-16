import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Hello {user.name}!</p>
          <p>You have been logged in!</p>
          <div>
              <p>Some more elements in another class :)</p>
          </div>
        </div>
        
      )
    );
  };
  
  export default Profile;