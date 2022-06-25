import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: ${({ size }) => {
    if (size === 'large') { return '40px' }

    return '24px'
  }};
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  color: black;
  background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  cursor: pointer;
  
  &:active {
    
  }
`

export const LinkStyle = styled.button`
  border: none; 
  color: #00CFFD;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
