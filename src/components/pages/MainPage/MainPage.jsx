import React, { useState, useEffect, useCallback } from 'react'

import { UserPage } from 'components/pages'
import { ListOfUsers } from 'components/organisms'
import { Button } from 'components/atoms'
import { fetchAllUsers, deleteUser } from 'api/users.service'

import {
  TitleStyle, HeaderStyle, MainPageStyle, ListStyle,
} from './MainPageStyle'

function MainPage() {
  const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(false)
  const [isUserModalOpened, setUserModalOpened] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const getUsers = useCallback(() => {
    fetchAllUsers()
      .then((data) => {
        setUsers(data)
      })
  }, [])

  useEffect(() => {
    getUsers()
  }, [])

  const handleUserDelete = (userId) => {
    deleteUser(userId)
      .then(() => { getUsers() })
  }

  return (
    <>
      <HeaderStyle>
        <TitleStyle>User List</TitleStyle>
        <Button size="large" type="default" onClick={() => { setUserModalOpened(true) }}>Create New</Button>
      </HeaderStyle>
      <MainPageStyle>
        <ListStyle>
          <ListOfUsers
            handleUserDelete={handleUserDelete}
            selectedUser={selectedUser}
            selectUser={setSelectedUser}
            users={users}
          />
          {isUserModalOpened}
        </ListStyle>
        <UserPage user={selectedUser} />
      </MainPageStyle>
    </>
  )
}

export default MainPage
