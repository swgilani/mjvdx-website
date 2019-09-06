import React from 'react'
import {Router, Route, browserHistory} from 'react-router';
import Welcome from './Pages/Welcome/Welcome';
import MainPage from './Pages/MainPage/MainPage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Experience from './Pages/Experience/Experience';
import Landscapes from './Pages/Landscapes/Landscapes';
import Packages from './Pages/Packages/Packages';
import Portraits from './Pages/Portraits/Portraits';
import Weddings from './Pages/Weddings/Weddings';
import FAQ from './Pages/FAQ/FAQ'

export default function App() {
  return (
    <div>
      <router>
        <Router history={browserHistory}>
          <Route path='/' exact component={Welcome} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Events' component={Events} />
          <Route path='/Experience' component={Experience} />
          <Route path='/Landscapes' component={Landscapes} />
          <Route path='/Packages' component={Packages} />
          <Route path='/Portraits' component={Portraits} />
          <Route path='/Weddings' component={Weddings} />
          <Route path='/MainPage' component={MainPage} />
          <Route path='/FAQ' component={FAQ} />

      </Router>
      </router>
    </div>
  )
}
