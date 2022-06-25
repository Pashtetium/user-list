import styled from 'styled-components'

export const ContainerStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;

  ${({ isSelected }) => (isSelected ? 'background-color: rgba(255, 255, 255, 0.1)' : '')}
`

export const MetaContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`
