import React from 'react';
import styled from 'styled-components';

import CustomerReview from './CustomerReview';

const StyledMain = styled.main`
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 2em auto;
`;

function Main() {
  return (
    <StyledMain>
      <CustomerReview />
    </StyledMain>
  )
}

export default Main;