import React from 'react'

import { ButtonStyle } from './ButtonStyle'

function Button({ children, size }) {
  return (
    <ButtonStyle size={size}>
      {children}
    </ButtonStyle>
  )
}

export default Button
