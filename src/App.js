import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import GlobalStyles from './style/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
