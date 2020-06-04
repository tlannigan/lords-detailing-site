import React from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';
import Quote from './Quote';

const StyledReviews = styled.div`
  max-width: 1000px;
`;

function CustomerReviews() {
  return (
    <StyledReviews>
      <ImageSlider />
      <Quote />
    </StyledReviews>
  )
}

export default CustomerReviews;