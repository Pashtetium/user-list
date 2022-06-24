import React from 'react'

import { TextStyle, MetaTextStyle } from './TextStyle'

function Text({ children, title }) {
  if (title) {
    return (
      <MetaTextStyle>
        {`${title}: ${children}`}
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
