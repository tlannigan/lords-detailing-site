import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Navbar from './Navbar';
import HeroBanner from './HeroBanner';

const StyledApp = styled.div`
  position: relative;
  height: 100vh;
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
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
