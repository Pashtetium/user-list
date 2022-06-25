import React from 'react'

import { Text, Button } from 'components/atoms'

import { ContainerStyle, MetaContainerStyle } from './ListItemStyle'

function ListItem({
  user, handleUserDelete, isSelected, selectUser,
}) {
  const {
    id, first_name, last_name, birth_date, gender,
  } = user

  return (
    <ContainerStyle isSelected={isSelected} onClick={() => { selectUser() }}>
      <MetaContainerStyle>
        <Text>
          {`${first_name} ${last_name}`}
        </Text>
        <Text title="Date of birth">
          {birth_date}
        </Text>
        <Text title="Gender">
          {gender}
        </Text>
      </MetaContainerStyle>
      <Button handleClick={() => handleUserDelete(id)} type="link">
        Delete
      </Button>
    </ContainerStyle>
  )
}

export default ListItem
