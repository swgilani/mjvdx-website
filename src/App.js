import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import MainPage from './Pages/MainPage/MainPage';

export default function App() {
  return (
    <div>
      <router>
        <Router>
          <Route path='/' exact component={Welcome} />
          <Route path='/MainPage' component={MainPage} />
        </Router>
      </router>
    </div>
  )
}
