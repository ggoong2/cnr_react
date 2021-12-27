import React from 'react';
import styled from 'styled-components';
import Write from './components/Write';
import Head from './components/Head';

const AppBlock = styled.div`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <AppBlock>
        <Head />
        <Write/>
      </AppBlock>
    </>
  );
}

export default App;

