import React from 'react'

import { ButtonStyle, LinkStyle } from './ButtonStyle'

function Button({
  children, size, type, handleClick,
}) {
  if (type === 'link') {
    return (
      <LinkStyle onClick={handleClick}>{children}</LinkStyle>
    )
  }

  return (
    <ButtonStyle size={size} onClick={handleClick}>
      {children}
    </ButtonStyle>
  )
}

export default Button
