import React from 'react'

import { NotFoundStub } from 'components/molecules'
import { UserData } from 'components/organisms'

import { UserPageStyle } from './UserPageStyle'

function UserPage({ user, setModalOpened }) {
  return (
    <UserPageStyle>
      {user
        ? <UserData setModalOpened={setModalOpened} user={user} />
        : <NotFoundStub text="No User Selected" />}
    </UserPageStyle>
  )
}

export default UserPage
