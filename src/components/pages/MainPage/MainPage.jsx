import React, { useState, useEffect } from 'react'
// Should have just used some component library...

import {
  fetchAllUsers, deleteUser, createUser, editUser,
} from 'api/users.api'
import { UserPage } from 'components/pages'
import { ListOfUsers, UserModal, Error } from 'components/organisms'
import { Button } from 'components/atoms'

import {
  TitleStyle, HeaderStyle, MainPageStyle, ListStyle,
} from './MainPageStyle'

function MainPage() {
  const [users, setUsers] = useState([])
  const [isUserModalOpened, setUserModalOpened] = useState(false)
  const [isUserUpdating, setUserUpdating] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isErrorVisible, setErrorVisible] = useState(false)

  useEffect(() => {
    fetchAllUsers()
      .then(({ data }) => {
        setUsers(data)
      })
      .catch(() => { setErrorVisible(true) })
  }, [])

  useEffect(() => {
    if (isErrorVisible) {
      setTimeout(() => {
        setErrorVisible(false)
      }, 3000)
    }
  }, [isErrorVisible])

  const handleUserDelete = (userId) => {
    deleteUser(userId)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId))

        setSelectedUser(false)
      })
      .catch(() => {
        setErrorVisible(true)
      })
  }

  const handleAddUser = (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target)
      .entries())

    if (formData.is_active === undefined) {
      formData.is_active = false
    } else {
      formData.is_active = true
    }

    createUser(formData)
      .then(({ data }) => {
        setUsers(users.concat(data))

        setUserModalOpened(false)

        setSelectedUser(null)
      })
      .catch(() => { setErrorVisible(true) })
  }

  const handleEditUser = (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target)
      .entries())

    // Checkbox doesn't send it's value if unchecked, this is a workaround for that
    if (formData.is_active === undefined) {
      formData.is_active = false
    } else {
      formData.is_active = true
    }

    editUser(formData)
      .then(({ data }) => {
        setSelectedUser(data)

        setUserModalOpened(false)
      })
      .catch(() => { setErrorVisible(true) })
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
      {isUserModalOpened && (
        <UserModal
          closeModal={setUserModalOpened}
          handleSubmit={toggleSubmitType}
          user={selectedUser}
        />
      )}
      {isErrorVisible && <Error />}
    </>
  )
}

export default MainPage
