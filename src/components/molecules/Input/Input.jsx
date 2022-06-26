import React from 'react'

import { Text } from 'components/atoms'

import { InputWrapperStyle, InputStyle } from './InputStyle'

function Input({
  label, value, type, required, name, handleChange,
}) {
  return (
    <InputWrapperStyle>
      <Text>{label}</Text>
      <InputStyle
        name={name}
        required={required}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </InputWrapperStyle>
  )
}

export default Input
