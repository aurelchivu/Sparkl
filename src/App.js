import React from 'react';
import { Route } from 'react-router-dom';
// Components and views
import Home from './views/Home';
import Nav from './components/Nav';
//  Style
import GlobalStyles from './style/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
