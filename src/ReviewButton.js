import React from 'react';
import styled from 'styled-components';

const StyledReviewButton = styled.button`
  position: absolute;
  top: calc(50% - 60px);
  ${(props) => (props.left ? 'left: -60px' : '')};
  ${(props) => (!props.left ? 'right: -60px' : '')};
  width: 60px;
  height: 120px;
  border: none;
  background: #ad8445;
  cursor: pointer;

  &:hover {
    background: #ac7d34;
  }

  img {
    ${(props) => (props.left ? 'transform: rotate(0.5turn)' : '')};
  }
`;

function ReviewButton(props) {
  return (
    <StyledReviewButton left={props.left}>
      <img src="./img/chevron.svg" alt="Black chevron" />
    </StyledReviewButton>
  );
}

export default ReviewButton;
