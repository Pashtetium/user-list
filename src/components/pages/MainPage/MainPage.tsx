import React from 'react'

import { ListOfUsers } from 'components/organisms'
import { Button } from 'components/atoms'

import { TitleStyle, HeaderStyle, MainPageStyle } from './MainPageStyle'

function MainPage() {
  return (
    <MainPageStyle>
      <HeaderStyle>
        <TitleStyle>User List</TitleStyle>
        <Button size="large">Create New</Button>
      </HeaderStyle>
      <ListOfUsers />
    </MainPageStyle>
  )
}

export default MainPage
