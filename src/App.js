import React from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import Header from './common/Header';
import InterestDetailPage from './pages/InterestDetailPage';
import SkillDetailPage from './pages/SkillDetailPage';
import InterestsPage from './pages/InterestsPage';
import SkillsPage from './pages/SkillsPage';
import DataLoader from './common/DataLoader';
import PageContent from './common/PageContent';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect exact from="/" to="/login" />
        <Route path="/">
          <Header />
          <DataLoader />

          <PageContent>
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
                <SkillDetailPage />
              </Route>
            </Switch>
          </PageContent>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
