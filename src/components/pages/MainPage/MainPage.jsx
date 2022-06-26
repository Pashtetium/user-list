import React, { useState, useEffect, useCallback } from 'react'

import { UserPage } from 'components/pages'
import { ListOfUsers, UserModal } from 'components/organisms'
import { Button } from 'components/atoms'
import {
  fetchAllUsers, deleteUser, createUser, editUser,
} from 'api/users.service'

import {
  TitleStyle, HeaderStyle, MainPageStyle, ListStyle,
} from './MainPageStyle'

function MainPage() {
  const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(false)
  const [isUserModalOpened, setUserModalOpened] = useState(false)
  const [isUserUpdating, setUserUpdating] = useState(false)
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
      .then(() => { setUsers(users.filter((user) => user.id !== userId)) })
  }

  const handleAddUser = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target)
      .entries())

    if (data.is_active === undefined) {
      data.is_active = false
    }

    createUser(data)
      .then((response) => {
        setUsers(users.concat(response))

        setUserModalOpened(false)
      })
  }

  const handleEditUser = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target)
      .entries())

    if (data.is_active === undefined) {
      data.is_active = false
    }

    editUser(data)
      .then((response) => {
        setSelectedUser(response)

        setUserModalOpened(false)
      })
  }

  const toggleSubmitType = isUserUpdating ? handleEditUser : handleAddUser

  const onCreateUser = () => {
    setUserUpdating(false)

    setUserModalOpened(true)
  }

  const onEditUser = () => {
    setUserUpdating(true)

    setUserModalOpened(true)
  }

  return (
    <>
      <HeaderStyle>
        <TitleStyle>User List</TitleStyle>
        <Button handleClick={onCreateUser} size="large" type="default">Create New</Button>
      </HeaderStyle>
      <MainPageStyle>
        <ListStyle>
          <ListOfUsers
            handleUserDelete={handleUserDelete}
            selectedUser={selectedUser}
            selectUser={setSelectedUser}
            users={users}
          />
        </ListStyle>
        <UserPage setModalOpened={onEditUser} user={selectedUser} />
      </MainPageStyle>
      <UserModal
        closeModal={setUserModalOpened}
        handleSubmit={toggleSubmitType}
        user={selectedUser}
        visible={isUserModalOpened}
      />
    </>
  )
}

export default MainPage
