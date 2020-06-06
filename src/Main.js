import React from 'react';
import styled from 'styled-components';

import CustomerReview from './CustomerReview';
import PackageDisplay from './PackageDisplay';

const StyledMain = styled.main`
  position: relative;
  width: 80%;
  max-width: 1000px;
  margin: 2em auto;

  h2 {
    margin: 3em 0 2em 0;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
  }
`;

function Main() {
  return (
    <StyledMain>
      <CustomerReview />
      <h2>- Featured Packages -</h2>
      <PackageDisplay />
    </StyledMain>
  )
}

export default Main;