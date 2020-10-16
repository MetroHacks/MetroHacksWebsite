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

            <div class="dropdown">
            <button class="dropbtn"><img src = {user.picture} alt={user.name}/></button>
            <div class="dropdown-content">
                
                
            </div>
            </div>
            <p>Thank you for creating an account!</p>


        </div>
        
      )
    );
  };
  
  export default Profile;
