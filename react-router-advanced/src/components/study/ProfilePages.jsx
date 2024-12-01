import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const profiles = ['A', 'B', 3, 4, 5];

function ProfilePages() {
  return (
    <div>

      <Navigation />
      
      <div  style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </Link>
      ))}

      <Outlet />
      </div>
      
    </div>
  )
}

export default ProfilePages;