import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link } from 'react-router-dom'


import { browserHistory } from "react-router";










const toolbar = props => {

    const toLandscapes = () => browserHistory.push("/Landscapes");
    const toPortraits = () => browserHistory.push("/Portraits");
    const toWeddings = () => browserHistory.push("/Weddings");
    const toEvents = () => browserHistory.push("/Events");
    
    const toPackages = () => browserHistory.push("/Packages");
    const toAbout = () => browserHistory.push("/About");
    const toContact = () => browserHistory.push("/Contact");
    
    const toFAQ = () => browserHistory.push("/FAQ");
    
   
return (
    
<header className="toolbar">
    
    <nav className="toolbar_navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        
        
        <div className="toolbar_navigation-items1">
            <ul className="fonts1">   

            <Link to='/Landscapes'>
      <li><button className="tool-button">LANDSCAPES</button></li> 
        </Link>
        <Link to='/Portraits'>
        <li><button className="tool-button">PORTRAITS</button></li>
        </Link>
        <Link to='/Weddings'>
        <li><button className="tool-button">WEDDINGS</button></li>
        </Link>

        <Link to='Events'>
        <li><button className="tool-button">EVENTS</button></li>    
        </Link>
            </ul>
        </div>
        
        <div className="spacer" />
        <div className="toolbar_logo">
        <Link to='MainPage'>
        <a>MJVDX</a>
        </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items2">
            <ul className="fonts1">
                
               <Link to='/Packages'>
                <li> <button className="tool-button">PACKAGES</button></li>
                </Link>
                <Link to='/About'>
                <li> <button className="tool-button">ABOUT ME</button></li>
                </Link>
                <Link to='/FAQ'>
                <li> <button className="tool-button">FAQ</button></li>
                </Link>
                <Link to='/Contact'>
                <li><button className="tool-button">CONTACT</button></li>
                </Link>
            </ul>
        </div>
        
    </nav>

   
   
</header>

);

}

export default toolbar;