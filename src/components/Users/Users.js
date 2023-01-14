import React from 'react'
import UserCard from './UserCard/UserCard'
import './Users.scss'

const Users = ({ users }) => {
  return (
    <div className='users'>
      <h2>Working with GET request</h2>
      <div className="users__items">
        {users?.map(user => (
          <UserCard key={user.registration_timestamp} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Users
