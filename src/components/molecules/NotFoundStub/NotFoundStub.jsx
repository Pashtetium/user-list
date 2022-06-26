import React from 'react'

import { ReactComponent as Logo } from 'common/assets/empty.svg'
import { Text } from 'components/atoms'

import { NotFoundStubStyle } from './NotFoundStubStyle'

function NotFoundStub({ text }) {
  return (
    <NotFoundStubStyle>
      <Logo style={{ marginBottom: '12px' }} />
      <Text type="heading">{text}</Text>
    </NotFoundStubStyle>
  )
}

export default NotFoundStub
