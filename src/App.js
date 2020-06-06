import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import Main from './Main';

const StyledApp = styled.div`
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'),
      url('../fonts/pacifico-v16-latin-regular.woff2') format('woff2'),
      url('../fonts/pacifico-v16-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url('../fonts/roboto-v20-latin-regular.woff2') format('woff2'),
      url('../fonts/roboto-v20-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'), url('../fonts/roboto-v20-latin-700.woff2') format('woff2'),
      url('../fonts/roboto-v20-latin-700.woff') format('woff');
  }

  position: relative;
  min-height: 100vh;
  margin: 0;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.tertiary};
`;

const theme = {
  primary: '#D2A45D',
  secondary: '#AD8445',
  tertiary: '#EDDBC1',
  text: '#312B2B',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="App">
        <Navbar />
        <HeroBanner />
        <Main />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
