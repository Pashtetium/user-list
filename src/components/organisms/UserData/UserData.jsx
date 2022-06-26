import React from 'react'

import { Text, Button } from 'components/atoms'

import { UserInfoStyle, UserDataStyle } from './UserDataStyle'

function UserData({ user, setModalOpened }) {
  const {
    first_name, last_name, birth_date, gender, job, biography, is_active,
  } = user

  return (
    <UserDataStyle>
      <UserInfoStyle>
        <Text type="heading">First Name</Text>
        <Text>{first_name}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Last Name</Text>
        <Text>{last_name}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Date of birth</Text>
        <Text>{birth_date}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Gender</Text>
        <Text>{gender}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Occupation</Text>
        <Text>{job}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Biography</Text>
        <Text>{biography}</Text>
      </UserInfoStyle>
      <UserInfoStyle>
        <Text type="heading">Status</Text>
        <Text>{is_active ? 'Active' : 'Inactive'}</Text>
      </UserInfoStyle>
      <Button handleClick={setModalOpened}>Edit</Button>
    </UserDataStyle>
  )
}

export default UserData
