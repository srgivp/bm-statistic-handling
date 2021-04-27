import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './components/homepage';
import Users from './components/users';
import UserStatistic from './components/user-statistic';
import { ToastProvider } from 'react-toast-notifications';
import ErrorHandler from './components/error-handler-component';

function Application() {
  return (
    <div className="App">
      <ErrorHandler />
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/users/:page" exact component={Users} />
        <Route path="/users/:page/user/:id" exact component={UserStatistic} />
      </Router>
    </div>
  );
}

const App = () => {
  return (
    <ToastProvider>
      {' '}
      <Application />{' '}
    </ToastProvider>
  );
};
export default App;
