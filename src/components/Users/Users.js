import React from 'react'
import Button from '../UIcomponents/Button/Button'
import UserCard from './UserCard/UserCard'
import './Users.scss'

const Users = ({ users, addOncklickUsers }) => {
  return (
    <div id='users' className='users'>
      <div className="container">
        <h2>Working with GET request</h2>
        <div className="users__items">
          {users?.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        {/* <Button buttonText='Show more' buttonClass='btn' buttonLink='' onClick={() => addOncklickUsers()}/> */}
        <button className='btn'  onClick={() => addOncklickUsers()}>Show more</button>
      </div>
    </div>
  )
}

export default Users
