import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Headroom from 'react-headroom'









const toolbar = props => (



    
<header className="toolbar">
    
    <nav className="toolbar_navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        
        
        <div className="toolbar_navigation-items1">
            <ul className="fonts1">        
        <li><a href="/">LANDSCAPES</a></li>
        <li><a href="/">PORTRAITS</a></li>
        <li><a href="/">WEDDINGS</a></li>
        <li><a href="/">EVENTS</a></li>    
        
            </ul>
        </div>
        
        <div className="spacer" />
        <div className="toolbar_logo"><a href='/'>MJVDX</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items2">
            <ul className="fonts1">
                
                <li> <a href="/">THE EXPERIENCE</a></li>
                <li> <a href="/">PACKAGES</a></li>
                <li> <a href="/">ABOUT ME</a></li>
                <li> <a href="/">CONTACT</a></li>
                
            </ul>
        </div>
        
    </nav>

   
   
</header>

);


export default toolbar;