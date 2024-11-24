import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const profiles = [1, 2, 3, 4, 5];

function ProfilePages() {
  return (
    <div style={{
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
  )
}

export default ProfilePages;