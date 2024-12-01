import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <div >
        <Link style={{textDecoration: 'none',
          color: 'pink',
          fontWeight: 'bold',
          fontSize: '2em'
        }}  to={'/'}>Home</Link>
        <Link style={{textDecoration: 'none',
          color: 'pink',
          fontWeight: 'bold',
          fontSize: '2em'
        }} to={'/profiles'}>Profiles</Link>
      </div>
    </div>
  )
}

export default Navigation