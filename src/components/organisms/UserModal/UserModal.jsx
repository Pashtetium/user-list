import React, { useState } from 'react'

import { Button, Text } from 'components/atoms'

import { ModalStyle, FormStyle, InputStyle } from './UserModalStyle'

function UserModal({
  user, handleSubmit, closeModal,
}) {
  const {
    id, first_name, last_name, birth_date, gender, job, biography, is_active,
  } = user || {}
  const [check, setCheck] = useState(is_active || false)

  return (
    <ModalStyle onClick={() => { closeModal() }}>
      <FormStyle onClick={(e) => { e.stopPropagation() }} onSubmit={handleSubmit}>
        <input name="id" readOnly type="hidden" value={id} />
        <InputStyle>
          <Text type="heading">First Name</Text>
          <input defaultValue={first_name} maxLength="256" name="first_name" required type="text" />
        </InputStyle>
        <InputStyle>
          <Text type="heading">Last Name</Text>
          <input defaultValue={last_name} maxLength="256" name="last_name" required type="text" />
        </InputStyle>
        <InputStyle>
          <Text type="heading">Date of birth</Text>
          <input defaultValue={birth_date} name="birth_date" required type="date" />
        </InputStyle>
        <InputStyle>
          <Text type="heading">Gender</Text>
          <select defaultValue={gender} name="gender" required>
            <option>male</option>
            <option>female</option>
          </select>
        </InputStyle>
        <InputStyle>
          <Text type="heading">Occupation</Text>
          <input defaultValue={job} maxLength="256" name="job" required type="text" />
        </InputStyle>
        <InputStyle>
          <Text type="heading">Biography</Text>
          <textarea defaultValue={biography} maxLength="1024" name="biography" required />
        </InputStyle>
        <InputStyle>
          <Text type="heading">Status</Text>
          <input
            checked={check}
            name="is_active"
            type="checkbox"
            onChange={() => { setCheck(!check) }}
          />
        </InputStyle>
        <Button type="submit">Save</Button>
      </FormStyle>
    </ModalStyle>
  )
}

export default UserModal
