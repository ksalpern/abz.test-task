import React, { useState } from 'react'
import Button from '../UIcomponents/Button/Button'
import Loader from '../UIcomponents/Loader/Loader'
import UserCard from './UserCard/UserCard'
import './Users.scss'

const Users = ({ users, addOncklickUsers, currentPage, total }) => {
  const [isLastPage, setIsLastPage] = useState(false)

  //  if (total === currentPage) {
  //     setIsLastPage(true)
  //   } else {
  //     setIsLastPage(false)
  //   }
  console.log(typeof total)
  console.log(typeof currentPage)
  console.log(total === currentPage)

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
