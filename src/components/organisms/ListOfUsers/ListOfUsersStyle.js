import styled from 'styled-components'

export const ListStyle = styled.ul`
  height: 100%;
  padding: 20px;
  margin: 0;
  overflow-x: hidden;

  && > li {
    border-bottom: 1px solid #fff;
  }

  && > li:last-child {
    border: none;
  }
`
