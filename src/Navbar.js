import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${props => props.theme.primary};
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);

  h1 {
    position: absolute;
    left: 1em;
  }

  ul {

    li {
      display: inline-block;
      font-size: 18px;
      font-weight: 700;
      margin: 0 2em;
    }
  }
`

function Navbar() {
  return (
      <StyledNavbar className="Navbar">
        <h1>Lord's Auto Detailing</h1>
        <ul>
          <li>SERVICES</li>
          <li>REVIEWS</li>
          <li>CONTACT</li>
        </ul>
      </StyledNavbar>
  );
}

export default Navbar;