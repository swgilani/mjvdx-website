import React from 'react'


import {HashRouter,Route} from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import MainPage from './Pages/MainPage/MainPage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';

import Landscapes from './Pages/Landscapes/Landscapes';
import Packages from './Pages/Packages/Packages';
import Portraits from './Pages/Portraits/Portraits';
import Weddings from './Pages/Weddings/Weddings';
import Saima from './Pages/Weddings/Saima'
import Jowayne from './Pages/Weddings/Jowayne'
import Sarah from './Pages/Weddings/Sarah'
import Eshoots from './Pages/Weddings/Eshoots'
import FAQ from './Pages/FAQ/FAQ'
import Prom from './Pages/Events/Prom'
import LoveToronto from './Pages/Events/LoveToronto'
import BillyBall from './Pages/Events/BillyBall'
import Baby from './Pages/Events/Baby'
import Hamza from './Pages/Weddings/Hamza'













export default function App() {





  return (
    <div>
      <router>
        <HashRouter>
          <Route path='/' exact component={Welcome} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact  component={Contact} />
          <Route path='/Events' exact component={Events} />
          
          <Route path='/Landscapes' exact component={Landscapes} />
          <Route path='/Packages' exact component={Packages} />
          <Route path='/Portraits' exact component={Portraits} />
          <Route path='/Weddings' exact component={Weddings} />
          <Route path='/MainPage' exact component={MainPage} />
          <Route path='/FAQ' exact component={FAQ} />
          <Route path='/Saima' exact component={Saima} />
          <Route path='/Jowayne' exact component={Jowayne} />
          <Route path='/Sarah' exact component={Sarah} />
          <Route path='/Eshoots' exact component={Eshoots} />
          <Route path='/Prom' exact component={Prom} />
          <Route path='/LoveToronto' exact component={LoveToronto} />
          <Route path='/BillyBall' exact component={BillyBall} />
          <Route path='/Baby' exact component={Baby} />
          <Route path='/Hamza' exact component={Hamza} />
      </HashRouter>
      </router>
    </div>
  )
}
