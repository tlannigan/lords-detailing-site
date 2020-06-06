import React from 'react';
import styled from 'styled-components';

const StyledHeroBanner = styled.div`
  background: no-repeat center/100% url('./img/carwash.jpg');
  width: 100%;
  height: 25em;
`;

function HeroBanner() {
  return <StyledHeroBanner />;
}

export default HeroBanner;
