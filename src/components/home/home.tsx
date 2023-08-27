import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { News } from './News';
import { About } from './About';

type HomeProps = object;

export const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container" style={{ width: '100%' }}>
          <Switch>
            <Route exact path="/">
              <News />
            </Route>
            <Route exact path="/business">
              <News category="business" />
            </Route>
            <Route path="/science">
              <News category="science" />
            </Route>
            <Route path="/technology">
              <News category="technology" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/entertainment">
              <News category="entertainment" />
            </Route>
            <Route path="/sports">
              <News category="sports" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
