import React from 'react'

import { TextStyle, MetaTextStyle } from './TextStyle'

function Text({ children, title, type }) {
  if (title) {
    return (
      <MetaTextStyle>
        {`${title}: ${children}`}
      </MetaTextStyle>
    )
  }

  if (type === 'heading') {
    return (
      <MetaTextStyle>
        {children}
      </MetaTextStyle>
    )
  }

  return (
    <TextStyle>
      {children}
    </TextStyle>
  )
}

export default Text
