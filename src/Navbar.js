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
  background: ${(props) => props.theme.primary};
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);

  h1 {
    position: absolute;
    left: 1em;
    color: #ebd183;
    font-family: 'Pacifico';
    font-size: 32px;
    font-weight: 400;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  ul {
    li {
      display: inline-block;
      font-family: 'Roboto';
      font-size: 18px;
      font-weight: 700;
      margin: 0 2em;

      a {
        color: ${props => props.theme.text};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-decoration-thickness: 0.1em;
        }
      }
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar className="Navbar">
      <h1>Lord's Auto Detailing</h1>
      <ul>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">REVIEWS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
