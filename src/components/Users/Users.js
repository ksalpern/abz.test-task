import React, { useState } from 'react'
import Button from '../UIcomponents/Button/Button'
import Loader from '../UIcomponents/Loader/Loader'
import UserCard from './UserCard/UserCard'
import './Users.scss'

const Users = ({ users, addOncklickUsers, isLastPage }) => {

  return (
    <div id='users' className='users'>
      <div className="container">
        <h2>Working with GET request</h2>
        <div className="users__items">
          {!users ?
            <Loader />
            :
            users?.map(user => (
              <UserCard key={user.id} user={user} />
            ))
          }
        </div>
        {/* <Button buttonText='Show more' buttonClass='btn' buttonLink='' onClick={() => addOncklickUsers()}/> */}
        <button className={isLastPage ? 'hidden' : 'btn'} onClick={() => addOncklickUsers()}>Show more</button>
      </div>
    </div>
  )
}

export default Users
