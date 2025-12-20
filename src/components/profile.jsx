import React from 'react'

const Profile = () => {
    const user =JSON.parse(localStorage.getItem("user"));
    console.log(user)
  return (
    <div>Profile</div>
  )
}

export default Profile