import React from 'react';
import './App.css';
import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import Header from './common/Header';
import InterestDetailPage from './pages/InterestDetailPage';
import InterestsPage from './pages/InterestsPage';
import SkillsPage from './pages/SkillsPage';
import DataLoader from './common/DataLoader';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Header />
          <DataLoader />

          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/interests">
              <InterestsPage />
            </Route>
            <Route path="/skills">
              <SkillsPage />
            </Route>
            <Route path="/interest/:id">
              <InterestDetailPage />
            </Route>
            <Route path="/skill/:id">
              <InterestDetailPage />
            </Route>
          </Switch>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
