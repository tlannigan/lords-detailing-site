import React from 'react';
import styled from 'styled-components';

const StyledQuote = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40%;
  font-family: 'Roboto';
  background: ${(props) => props.theme.primary};

  .quote-container {
    display: flex;
    flex-direction: column;

    p {
      margin: 0;
      font-size: 48px;
      font-weight: 700;
    }

    .left-quotation {
      line-height: 0;
      margin-left: 7%;
    }

    .right-quotation {
      text-align: right;
      line-height: 0.75;
      margin-right: 7%;
    }

    blockquote {
      width: 70%;
      align-self: center;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
    }
  }

  .author {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 1em;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 48px;
      margin-right: 1em;
    }

    p {
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
  }
`;

function Quote(props) {
  return (
    <StyledQuote>
      <div className="quote-container">
        <p className="left-quotation">&ldquo;</p>
        <blockquote>{props.text}</blockquote>
        <p className="right-quotation">&rdquo;</p>
      </div>
      <div className="author">
        <img alt="Amanda Seyfried" src="https://lh3.googleusercontent.com/proxy/MO43VU7i94K08_xGe8dvib6VRQQ7YpdQIcSXvnJrWvZgKKCtZM5LRib_zufp4U5kLgW6AvuwRUo3B8Lm76WfuPiWpos86pYeAsPXPeIW5WoDHfdXVSY" />
        <p>Amanda Seyfried</p>
      </div>
    </StyledQuote>
  );
}

export default Quote;
