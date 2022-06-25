import React from 'react'

import { Text } from 'components/atoms'

import { UserPageStyle, UserInfoStyle } from './UserPageStyle'

function UserPage({ user }) {
  const {
    first_name, last_name, birth_date, gender, job, biography, is_active,
  } = user

  return user
    ? (
      <UserPageStyle>
        <UserInfoStyle>
          <Text type="heading">Full Name</Text>
          <Text>{`${first_name} ${last_name}`}</Text>
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
          <Text type="heading">Gender</Text>
          <Text>{gender}</Text>
        </UserInfoStyle>
        <UserInfoStyle>
          <Text type="heading">Status</Text>
          <Text>{is_active ? 'Active' : 'Inactive'}</Text>
        </UserInfoStyle>
      </UserPageStyle>
    ) : (<NotFoundStub />)
}

export default UserPage
