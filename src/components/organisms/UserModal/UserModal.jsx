import React, { useState } from 'react'

import { Button } from 'components/atoms'
import { Input } from 'components/molecules'

import { ModalStyle, FormStyle } from './UserModalStyle'

function UserModal({
  user, handleSubmit, visible, closeModal,
}) {
  const {
    id, first_name, last_name, birth_date, gender, job, biography, is_active,
  } = user || {}
  const [checked, setChecked] = useState(is_active || false)

  return (visible ? (
    <ModalStyle visible={visible} onClick={() => { closeModal() }}>
      <FormStyle onClick={(e) => { e.stopPropagation() }} onSubmit={handleSubmit}>
        <input name="id" type="hidden" value={id} />
        <Input defaultValue={first_name} label="First Name" name="first_name" required type="text" />
        <Input defaultValue={last_name} label="Last Name" name="last_name" required type="text" />
        <Input defaultValue={birth_date} label="Date of birth" name="birth_date" required type="date" />
        <select defaultValue={gender} name="gender" required="required">
          <option>male</option>
          <option>female</option>
        </select>
        <Input defaultValue={job} label="Occupation" name="job" required type="text" />
        <Input defaultValue={biography} label="Biography" name="biography" required type="textarea" />
        <Input
          defaultValue={checked}
          handleChange={() => { setChecked(!checked) }}
          label="Status"
          name="is_active"
          type="checkbox"
        />
        <Button type="submit">Save</Button>
      </FormStyle>
    </ModalStyle>
  ) : null
  )
}

export default UserModal
