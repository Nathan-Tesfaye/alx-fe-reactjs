import React from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {

  const params = useParams();
  console.log(params);

  return (
    <h1>Profile Page {params.profileId}</h1>
  )
}

export default ProfilePage;  