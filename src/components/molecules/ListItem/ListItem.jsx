import React from 'react'

import { Text, Button } from 'components/atoms'

import { ContainerStyle, MetaContainerStyle } from './ListItemStyle'

function ListItem() {
  return (
    <ContainerStyle>
      <MetaContainerStyle>
        <Text>
          Billy Herrington
        </Text>
        <Text title="Date of birth">
          01/11/1012
        </Text>
        <Text title="Gender">
          Male
        </Text>
      </MetaContainerStyle>
      <Button type="link">
        Delete
      </Button>
    </ContainerStyle>
  )
}

export default ListItem
