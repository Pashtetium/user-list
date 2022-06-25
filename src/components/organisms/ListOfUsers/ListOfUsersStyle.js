import styled from 'styled-components'

export const ListStyle = styled.ul`
  position:relative;

  padding: 20px;
  margin: 0;

  && > li::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 400px;
    height: 1px;

    background-color: #fff;
  }

  && > li:last-child {
    border: none;
  }
`
