import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';

import { GlobalStyles } from './AppStyles';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

const App: React.FC = () => (
  <Provider store={store}>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </>
  </Provider>
);

export default App;
