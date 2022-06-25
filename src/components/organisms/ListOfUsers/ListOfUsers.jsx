import React from 'react'

import { ListItem } from 'components/molecules'

import { ListStyle } from './ListOfUsersStyle'

function ListOfUsers({
  users, handleUserDelete, selectedUser, selectUser,
}) {
  return (
    <ListStyle>
      {users?.map((user) => (
        <ListItem
          key={user.id}
          handleUserDelete={handleUserDelete}
          isSelected={selectedUser?.id === user.id}
          selectUser={() => { selectUser(user) }}
          user={user}
        />
      ))}
    </ListStyle>
  )
}

export default ListOfUsers
