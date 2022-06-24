import React from 'react'

import { ListItem } from 'components/molecules'

import { ListStyle } from './ListOfUsersStyle'

function ListOfUsers() {
  return (
    <ListStyle>
      <ListItem />
      <ListItem />
      <ListItem />
    </ListStyle>
  )
}

export default ListOfUsers
