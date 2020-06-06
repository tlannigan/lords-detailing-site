import React from 'react';
import styled from 'styled-components';

import ReviewButton from './ReviewButton';
import ImageSlider from './ImageSlider';
import Quote from './Quote';

const StyledReviews = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

function CustomerReview() {
  return (
    <StyledReviews>
      <ReviewButton left />
      <ImageSlider />
      <Quote text="Wow, you did an amazing job. My vehicle looks brand new!" />
      <ReviewButton />
    </StyledReviews>
  )
}

export default CustomerReview;