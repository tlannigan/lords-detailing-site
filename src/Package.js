import React from 'react';
import styled from 'styled-components';

const StyledPackage = styled.div`
  flex: 0 1 30%;
  color: ${props => props.theme.text};

  h3, p {
    text-align: center;
    font-size: 32px;
    margin: 0;
    padding: 0.5em;
    background: ${props => props.theme.primary};
  }

  ul {
    margin: 0;
    padding: 2em 2em 2em 4em;
    background: #fff;

    li {
      color: ${props => props.theme.primary};

      span {
        color: ${props => props.theme.text};
      }
    }
  }

  p {
    font-size: 48px;
    padding: 0.25em;
  }
`;

function Package(props) {
  return (
    <StyledPackage>
      <h3>{props.title}</h3>
      <ul>
        {props.included.map((item) => {
          return <li><span>{item}</span></li>;
        })}
      </ul>
      <p>{props.price}</p>
    </StyledPackage>
  );
}

export default Package;
