import React from 'react';
import styled from 'styled-components';

const StyledImageSlider = styled.div`
  width: 60%;

  img {
    display: block;
    width: 100%;
  }
`

function ImageSlider() {
  return (
    <StyledImageSlider>
      <img src="./img/car_being_washed.jpg" alt="Car before and after" />
    </StyledImageSlider>
  )
}

export default ImageSlider;