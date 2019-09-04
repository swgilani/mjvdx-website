import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Headroom from 'react-headroom'

import { browserHistory } from "react-router";










const toolbar = props => {

    const toLandscapes = () => browserHistory.push("/Landscapes");
    const toPortraits = () => browserHistory.push("/Portraits");
    const toWeddings = () => browserHistory.push("/Weddings");
    const toEvents = () => browserHistory.push("/Events");
    const toExperience = () => browserHistory.push("/Experience");
    const toPackages = () => browserHistory.push("/Packages");
    const toAbout = () => browserHistory.push("/About");
    const toContact = () => browserHistory.push("/Contact");
    const toMainPage = () => browserHistory.push("/MainPage");
    
   
return (
    
<header className="toolbar">
    
    <nav className="toolbar_navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        
        
        <div className="toolbar_navigation-items1">
            <ul className="fonts1">        
        <li><button className="tool-button" onClick={toLandscapes} >LANDSCAPES</button></li>
        <li><button className="tool-button" onClick={toPortraits}>PORTRAITS</button></li>
        <li><button className="tool-button" onClick={toWeddings}>WEDDINGS</button></li>
        <li><button className="tool-button" onClick={toEvents}>EVENTS</button></li>    
        
            </ul>
        </div>
        
        <div className="spacer" />
        <div className="toolbar_logo"><a href='/MainPage'>MJVDX</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items2">
            <ul className="fonts1">
                
                <li> <button className="tool-button" onClick={toExperience}>THE EXPERIENCE</button></li>
                <li> <button className="tool-button" onClick={toPackages}>PACKAGES</button></li>
                <li> <button className="tool-button" onClick={toAbout}>ABOUT ME</button></li>
                <li><button className="tool-button" onClick={toContact}>CONTACT</button></li>
                
            </ul>
        </div>
        
    </nav>

   
   
</header>

);

}

export default toolbar;